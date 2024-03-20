import { Request, Response } from "express"
import User from "../models/userModel"
import bcrypt from "bcrypt"

export const userLogin = async (req: Request, res: Response) => {

  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({
        status: "failed",
        message: "Fill all the necessary details"
      })
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(409).json({
        status: "failed",
        message: "user doesn't exists"
      })
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({
        status: "failed",
        message: "email or password is wrong"
      })
    }

    return res.status(200).json({
      status: "success",
      message: "Welcome Back"
    })
  } catch (err) {
    return res.status(500).json({
      status: "failed",
      message: "Try Again, this one is our fault"
    })
  }
}

export const userSignup = async (req: Request, res: Response) => {

  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(400).json({
        status: "failed",
        message: "Fill all the necessary details"
      })
    }

    const exists = await User.findOne({ email });

    if (exists) {
      return res.status(409).json({
        status: "failed",
        message: "email already in use"
      })
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ username, email, password: hashedPassword });
    return res.status(200).json({
      status: "success",
      message: `Hii ${user.username} Welcome  to Calenso`
    })
  } catch (err) {
    return res.status(500).json({
      status: "failed",
      message: "try again"
    })
  }

}

export const getUser = async (req: Request, res: Response) => {
  res.status(200).json({ message: "here's your user" })
}

export const updateUser = async (req: Request, res: Response) => {
  res.status(200).json({ message: "user updated" })
}

export const deleteUser = async (req: Request, res: Response) => {
  res.status(200).json({ message: "user deleted" })
}
