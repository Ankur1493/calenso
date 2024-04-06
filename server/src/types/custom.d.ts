import 'express';

interface IUser {
  _id: string;
  username: string;
  password: string;
  email: string;
  profilePicUrl?: string;
  googleId?: string;
  googleAccessToken?: string;
  googleRefreshToken?: string;
  meetings: string[];
  bookings: string[];
}

interface IAvailableSchedule {
  DAY: string;
  START_TIME: Date;
  LAST_TIME: Date;
}

interface IAvailability {
  _id: string;
  availableSchedule: IAvailableSchedule[];
}

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}

