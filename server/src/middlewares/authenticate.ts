import jwt from "jsonwebtoken";
import User from "../models/userModel";
import { Request, Response, NextFunction } from "express";

interface JwtPayload {
  userId: string
}

const SECRET_KEY = process.env.SECRET as string;
export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  let token: string;
  token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({
      error: "not authorized please login",
    })
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;
    if (!decoded) {
      throw new Error("not authorized, Login again")
    }
    req.user = await User.findById(decoded.userId).select("-password");
    next();
  } catch (err) {
    return res.status(401).json({
      error: "not authorized"
    })
  }
};
