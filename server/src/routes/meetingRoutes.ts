import express from "express";
import { getAllMeetings, getMeeting, createMeeting, deleteMeeting, updateMeeting } from "../controllers/MeetingControllers";
import { authenticate } from "../middlewares/authenticate";

const router = express.Router();

router.get("/all", authenticate, getAllMeetings);
router.get("/:meetingId", getMeeting);
router.post("/create", authenticate, createMeeting);
router.delete("/:meetingId", deleteMeeting);
router.patch("/:meetingId", updateMeeting)

export { router as meetingRoutes };
