import 'express';
import { User } from "../models/userModel"; // Adjust the import path as necessary

declare module 'express-serve-static-core' {
  interface Request {
    user?: User; // Extend the Request type to include the user object
  }
}

