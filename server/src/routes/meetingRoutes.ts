import express from "express";
import { getAllMeetings, getMeeting, createMeeting, deleteMeeting, updateMeeting } from "../controllers/MeetingControllers";

const router = express.Router();

router.get("/all", getAllMeetings);
router.get("/:meetingId", getMeeting);
router.post("/create", createMeeting);
router.delete("/:meetingId", deleteMeeting);
router.patch("/:meetingId", updateMeeting)

export { router as meetingRoutes };
