import jwt from "jsonwebtoken";
import User from "../models/userModel";
import { Request, Response, NextFunction } from "express";
import { IUser } from "../types/custom";


interface JwtPayload {
  _id: string;
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  let token: string | undefined;
  token = req.cookies?.jwt;

  if (!token) {
    return res.status(400).json({
      error: "no token",
      message: "m nhi aaunga"
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET as string) as JwtPayload;
    req.user = await User.findById(decoded._id).select("-password").lean() as IUser;
    if (!req.user) {
      return res.status(403).json({
        status: "failed",
        message: "User not authenticated"
      });
    }
    next();
  } catch (err) {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0)
    });
    return res.status(401).json({
      error: "not authorized",
      message: "Session expired. Please log in again."
    });
  }
};

