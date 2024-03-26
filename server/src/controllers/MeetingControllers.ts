import { Request, Response } from "express"
import Availability from "../models/availabilityModel"
import Meeting from "../models/meetingsModel"

export const getAllMeetings = async (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "Here are all your meetings"
  })
}

export const getMeeting = async (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "Here is your meeting"
  })
}
export const createMeeting = async (req: Request, res: Response) => {

  const { meetingInfo, availabilitySchedule } = req.body;
  try {
    if (!meetingInfo || !availabilitySchedule) {
      res.status(400).json({
        status: "failed",
        message: "fill all the necessary details"
      })
    }

    const availability = await Availability.create({ availabilitySchedule });

    if (!availability) {
      return res.status(500).json({
        status: "failed",
        message: "this one's on us, try again"
      })
    }

    const { title, duration, info } = meetingInfo;
    const availabilityId = availability._id;
    //const userID = FROM JWT AUTH

    const meeting = await Meeting.create({ title, duration, info, availabilityId });

    if (!meeting) {
      return res.status(500).json({
        status: "failed",
        message: "this one's on us try again"
      })
    }

    return res.status(200).json({
      status: "success",
      message: "Yay, your meeting has been created"
    })
  } catch (err) {
    return res.status(500).json({
      status: "failed",
      message: "try Again"
    })
  }

}
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

