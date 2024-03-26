import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface JwtPayload {
  userId: string;
}

const SECRET_KEY = process.env.SECRET as string;

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  let token: string;
  token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({
      error: "Not authorized, please login",
    });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;

    req.userId = decoded.userId;

    next();
  } catch (err) {
    return res.status(401).json({
      error: "Not authorized"
    });
  }
};
