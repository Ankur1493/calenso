import { Request, Response } from "express"
import Availability from "../models/availabilityModel"
import Meeting from "../models/meetingsModel"
import User from "../models/userModel"


export const getAllMeetings = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(403).json({
        status: "failed",
        message: "user not authenticated"
      });
    }

    const dbUser = await User.findById(user._id).populate({ path: "meetings", select: "-availability -user_id" })
    if (!dbUser) {
      return res.status(400).json({
        status: "failed",
        message: "try again, this one's on us"
      });
    }

    const userMeetings = dbUser.meetings;


    const message = userMeetings.length > 0 ? "Here's your meetings" : "You haven't created any event";
    return res.status(200).json({
      status: "success",
      message,
      userMeetings
    });

  } catch (err) {
    return res.status(500).json({
      status: "failed",
      message: "An error occurred"
    });
  }
}


export const getMeeting = async (req: Request, res: Response) => {

  try {
    const meetingId = req.params.id;
    const meeting = await Meeting.findById(meetingId).populate("availability");
    if (!meeting) {
      return res.status(400).json({
        status: "failed",
        message: "try again"
      });
    }
    if (!meeting.user_id.equals(req.user?._id)) {
      return res.status(409).json({
        status: "failed",
        message: "not authorized"
      });
    }
    return res.status(200).json({
      status: "success",
      message: "here's your meeting",
      meeting
    })

  } catch (err) {
    return res.status(500).json({
      status: "failed",
      message: "An error occurred"
    });
  }
}


export const createMeeting = async (req: Request, res: Response) => {
  const { meetingInfo, availabilitySchedule } = req.body;
  try {
    if (!meetingInfo || !availabilitySchedule) {
      return res.status(400).json({
        status: "failed",
        message: "fill all the necessary details"
      });
    }

    const availability = await Availability.create({ availableSchedule: availabilitySchedule });

    if (!availability) {
      return res.status(500).json({
        status: "failed",
        message: "this one's on us, try again"
      });
    }

    const { title, duration, info } = meetingInfo;
    const availabilityId = availability._id;
    const user = req.user;

    if (!user) {
      return res.status(403).json({
        status: "failed",
        message: "User not authenticated"
      });
    }

    // Note the change here from userId to user_id to match your schema
    const meeting = await Meeting.create({
      title,
      duration,
      info,
      availability: availabilityId,
      user_id: user._id // This line was corrected
    });

    if (!meeting) {
      return res.status(500).json({
        status: "failed",
        message: "this one's on us try again"
      });
    }

    const finalStatus = await User.findByIdAndUpdate(
      user._id,
      { $push: { meetings: meeting._id } },
      { new: true, useFindAndModify: false }
    );

    if (!finalStatus) {
      return res.status(500).json({
        status: "failed",
        message: "this one's on us try again"
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Yay, your meeting has been created"
    });
  } catch (err) {
    console.error(err); // This will help in debugging
    return res.status(500).json({
      status: "failed",
      message: "try Again",
    });
  }
};

export const updateMeeting = async (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "your meeting is updated"
  })
}
export const deleteMeeting = async (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "your meeting is deleted"
  })
}

