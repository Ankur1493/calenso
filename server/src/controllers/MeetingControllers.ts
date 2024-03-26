import { Request, Response } from "express"

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
  res.status(200).json({
    status: "success",
    message: "Your meeting is created"
  })
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

