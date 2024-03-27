import express from "express";
import { getAllMeetings, getMeeting, createMeeting, deleteMeeting, updateMeeting } from "../controllers/MeetingControllers";
import { authenticate } from "../middlewares/authenticate";

const router = express.Router();

router.get("/all", authenticate, getAllMeetings);
router.get("/:id", authenticate, getMeeting);
router.post("/create", authenticate, createMeeting);
router.delete("/:id", authenticate, deleteMeeting);
router.patch("/:id", authenticate, updateMeeting)

export { router as meetingRoutes };
