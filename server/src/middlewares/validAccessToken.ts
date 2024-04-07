import { Request, Response, NextFunction } from "express";
import { IUser } from "../types/custom";
import jwt from "jsonwebtoken";
import refreshAccessToken from "../utils/refreshAccessToken";

const ensureValidAccessToken = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.user as IUser;

  if (!user.googleAccessToken) {
    return res.status(401).json({ message: 'Access token is missing.' });
  }

  const decodedToken = jwt.decode(user.googleAccessToken);
  if (!decodedToken || decodedToken.exp * 1000 < Date.now()) {
    try {
      const accessToken = await refreshAccessToken(user);
      req.user.googleAccessToken = accessToken;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Failed to refresh access token.' });
    }
  } else {
    next();
  }
}

export default ensureValidAccessToken;

