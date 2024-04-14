import express from "express";
import { getAllBookings, createBooking, cancelBooking, updateBooking, getBookingDetails } from "../controllers/bookingControllers";
import { authenticate } from "../middlewares/authenticate";
import ensureValidAccessToken from "../middlewares/validAccessToken";
const router = express.Router();

router.get("/", authenticate, getAllBookings);
router.get("/:id", authenticate, getBookingDetails);
router.post("/", authenticate, ensureValidAccessToken, createBooking);
router.delete("/:id", authenticate, ensureValidAccessToken, cancelBooking);
router.patch("/:id", authenticate, ensureValidAccessToken, updateBooking);

export { router as bookingRoutes }
