import User from "../models/userModel";
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import refreshAccessToken from "../utils/refreshAccessToken";

const ensureValidAccessToken = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ message: 'User not authenticated.' });
  }

  if (!user.googleAccessToken) {
    return res.status(401).json({ message: 'Access token is missing.' });
  }
  const decodedToken = jwt.decode(user.googleAccessToken) as JwtPayload;
  if (!decodedToken || (decodedToken.exp as number) * 1000 < Date.now()) {
    try {
      const refreshedAccessToken = await refreshAccessToken(user.googleRefreshToken);
      const updatedUser = await User.findByIdAndUpdate(
        user._id,
        { googleAccessToken: refreshedAccessToken },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(500).json({ message: 'Failed to update user.' });
      }

      next();
    } catch (error) {
      return res.status(401).json({ message: 'Failed to refresh access token.' });
    }
  } else {
    next();
  }
}

export default ensureValidAccessToken;

