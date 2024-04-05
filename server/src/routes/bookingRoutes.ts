import express from "express";
import { getAllBookings, getBookingDetails, createBooking, cancelBooking, updateBooking } from "../controllers/bookingControllers";
const router = express.Router();

router.get("/", getAllBookings);
router.get("/:id", getBookingDetails);
router.post("/", createBooking);
router.delete("/:id", cancelBooking);
router.patch("/:id", updateBooking);

export { router as bookingRoutes }
