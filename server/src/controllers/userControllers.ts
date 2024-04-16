import { Request, Response } from "express";
import User from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Meeting from "../models/meetingsModel";
dotenv.config();

const SECRET_KEY = process.env.SECRET as string;

const createToken = (_id: string): string => {
  return jwt.sign({ _id }, SECRET_KEY, { expiresIn: "10d" });
};

export const userLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({
        status: "failed",
        message: "Fill all the necessary details",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(409).json({
        status: "failed",
        message: "user doesn't exist",
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({
        status: "failed",
        message: "email or password is wrong",
      });
    }

    const token = createToken(user._id.toString());
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 2 * 24 * 60 * 60 * 1000, // 2days
    });

    return res.status(200).json({
      message: "Welcome Back",
      username: user.username,
      email: user.email,
      profilePicture: user.profilePicUrl ? user.profilePicUrl : null,
      firstName: user.firstName ? user.firstName : null,
    });
  } catch (err) {
    return res.status(500).json({
      status: "failed",
      message: "Try Again, this one is our fault",
    });
  }
};

export const userSignup = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(400).json({
        status: "failed",
        message: "Fill all the necessary details",
      });
    }

    const exists = await User.findOne({ email });
    const existingUsername = await User.findOne({ username });

    if (existingUsername) {
      return res.status(409).json({
        status: "failed",
        message: "username already taken, try another",
      });
    }

    if (exists) {
      return res.status(409).json({
        status: "failed",
        message: "email already in use",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = createToken(user._id.toString());
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 2 * 24 * 60 * 60 * 1000, // 2days
    });

    return res.status(200).json({
      status: "success",
      message: `Hi ${user.username}, welcome to Calenso`,
      username: user.username,
      email: user.email,
    });
  } catch (err) {
    return res.status(500).json({
      message: "try again",
    });
  }
};

export const userLogout = (req: Request, res: Response) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({
    status: "success",
    message: "user logged out",
  });
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const username = req.params.username;
    const meetingId = req.params.meetingId;
    if (!meetingId) {
      return res.status(400).json({
        status: "failed",
        message: "try again",
      });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        status: "failed",
        message: "user doesn't exist",
      });
    }
    const authorizedMeeting = user.meetings.findIndex(
      (meeting) => meeting.toString() === meetingId
    );
    if (authorizedMeeting === -1) {
      return res.status(400).json({
        status: "failed",
        message: "wrong meeting accessed",
      });
    }

    const meeting = await Meeting.findById(meetingId).populate("availability");
    if (!meeting) {
      return res.status(400).json({
        status: "failed",
        message: "try again",
      });
    }

    res.status(200).json({
      message: "here's your user",
      username: user.username,
      userProfile: user.profilePicUrl,
      firstName: user.firstName ? user.firstName : null,
      lastName: user.lastName ? user.lastName : null,
      meeting,
    });
  } catch (err) {
    return res.status(400).json({
      status: "failed",
      message: "user not found, try again",
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  res.status(200).json({ message: "user updated" });
};

export const deleteUser = async (req: Request, res: Response) => {
  res.status(200).json({ message: "user deleted" });
};
