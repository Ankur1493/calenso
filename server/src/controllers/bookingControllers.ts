import { Request, Response } from "express"

export const getAllBookings = (req: Request, res: Response) => {
  return res.status(200).json({
    status: "success",
    message: "here's your bookings",
  })
}
export const getBookingDetails = (req: Request, res: Response) => {

  return res.status(200).json({
    status: "success",
    message: "here's your booking details",
  })
}

export const createBooking = (req: Request, res: Response) => {
  return res.status(200).json({
    status: "success",
    message: "booking createad",
  })
}

export const cancelBooking = (req: Request, res: Response) => {
  return res.status(200).json({
    status: "success",
    message: "booking deleted",
  })
}

export const updateBooking = (req: Request, res: Response) => {
  return res.status(200).json({
    status: "success",
    message: "booking updated",
  })
}
