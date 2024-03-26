import 'express';

interface IUser {
  _id: string; // Use ObjectId for the _id property
  username: string;
  password: string; // Consider omitting sensitive properties if not needed
  email: string;
  meetings: string[]; // Assuming these are ObjectId strings
  bookings: string[]; // Assuming these are ObjectId strings
  // Add other properties as necessary
}

declare global {
  namespace Express {
    interface Request {
      user?: IUser; // Use this interface for the user
    }
  }
}

