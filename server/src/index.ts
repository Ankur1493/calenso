import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { userRoutes } from "./routes/userRoutes";
import { meetingRoutes } from "./routes/meetingRoutes";
import { bookingRoutes } from "./routes/bookingRoutes";
import session = require("express-session");
import passport from "./config/passport";
import { googleAuthRoutes } from "./routes/googleRoutes";
dotenv.config();
const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

const URI = process.env.MONGO_DB_URI as string;
const PORT = process.env.PORT || 8000;

app.get("/health", (_: Request, res: Response) => {
  res.status(200).json({ status: "all clear" });
});

app.use("/user", userRoutes);
app.use("/meetings", meetingRoutes);
app.use("/bookings", bookingRoutes);
app.use("/auth/google", googleAuthRoutes);

mongoose
  .connect(URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((_) => {
    console.error("error occured during db connection");
  });

export default app;
