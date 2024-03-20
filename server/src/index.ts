import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { userRoutes } from "./routes/userRoutes";


dotenv.config();
const app = express();
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};
app.use(cors(corsOptions))
const URI = process.env.MONGO_DB_URI as string;
const PORT = process.env.PORT || 8000;

app.get("/", (_: Request, res: Response) => {
  res.status(200).json({ status: "all clear" })
});

app.use("/user", userRoutes);

mongoose.connect(URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    });
  }).catch(_ => {
    console.error("error occured during db connection")
  })
