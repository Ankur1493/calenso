import { Request, Response } from "express"
import Booking from "../models/BookingsModel"
import { IBooking } from "../types/custom"


export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(403).json({
        status: 'failed',
        message: 'user not authenticated'
      });
    }

    const userBookings = await Booking.find({ first_user: user._id }).lean().exec();

    if (!userBookings) {
      return res.status(400).json({
        status: 'failed',
        message: "user's bookings not found"
      });
    }

    if (userBookings.length === 0) {
      return res.status(200).json({
        status: 'success',
        message: "User has no bookings"
      });
    }

    const mappedBookings: IBooking[] = userBookings.map((booking: any) => ({
      _id: booking._id.toString(),
      meeting_id: booking.meeting_id.toString(),
      first_user: booking.first_user.toString(),
      second_user: booking.second_user.toString(),
      scheduledTime: booking.scheduledTime,
      additionalInfo: booking.additionalInfo || ''
    }));

    return res.status(200).json({
      status: 'success',
      message: 'Here are your bookings',
      bookings: mappedBookings
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: 'failed',
      message: 'An error occurred while fetching bookings'
    });
  }
};

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
