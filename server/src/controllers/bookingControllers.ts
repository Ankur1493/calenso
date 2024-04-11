import { Request, Response } from "express"
import Booking from "../models/BookingsModel"
import Meeting from "../models/meetingsModel";
import { createEvent } from "../utils/googleCalendarFunctions";
import User from "../models/userModel";


export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(403).json({
        status: 'failed',
        message: 'user not authenticated'
      });
    }

    const DBuser = await User.findById(user._id).populate("bookings")
    if (!DBuser) {
      return res.status(409).json({
        status: "failed",
        message: "not authorized"
      })
    }

    const userBookings = DBuser.bookings

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

    return res.status(200).json({
      status: 'success',
      message: 'Here are your bookings',
      bookings: userBookings
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: 'failed',
      message: 'An error occurred while fetching bookings'
    });
  }
};

export const createBooking = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    const { START_TIME, guestUser, meetingId } = req.body

    if (!START_TIME || !guestUser) {
      return res.status(400).json({
        status: "failed",
        message: "fill all the fields"
      })
    }
    const startTime = new Date(START_TIME);

    if (!user) {
      return res.status(400).json({
        status: "failed",
        message: "user not authorized"
      })
    }
    const DBuser = await User.findById(user._id)
    if (!DBuser) {
      return res.status(400).json({
        status: "failed",
        message: "user galat hai"
      })
    }
    const userEmail = DBuser.email as string;
    const accessToken = DBuser.googleAccessToken as string;

    const meeting = await Meeting.findById(meetingId).populate('availability');
    if (!meeting) {
      return res.status(400).json({
        status: "failed",
        message: "select a proper meeting"
      })
    }
    const { title, info, duration } = meeting;
    if (!title || !info) {
      return res.status(500).json({
        status: "Failed",
        message: "this one's on us try again"
      })
    }
    const endTime = new Date(startTime.getTime() + duration * 60000);

    const eventStatus = await createEvent({
      title: title,
      description: info,
      firstUser: userEmail,
      guestUser,
      startTime,
      endTime,
      accessToken
    });

    if (!eventStatus) {
      return res.status(400).json({
        status: "failed",
        message: "try again, problem in creating event in your calendar"
      })
    }
    const bookingBody = await Booking.create({
      meeting_id: meetingId,
      title,
      description: info,
      first_user: userEmail,
      guestUser,
      startTime,
      endTime,
      event: eventStatus
    })

    if (!bookingBody) {
      return res.status(500).json({
        message: "this one's on us try again",
        status: "failed"
      })
    }
    await User.findOneAndUpdate(
      { email: userEmail },
      { $push: { bookings: bookingBody._id } },
      { new: true }
    );
    await User.findOneAndUpdate(
      { email: guestUser },
      { $push: { bookings: bookingBody._id } },
      { new: true }
    );

    return res.status(200).json({
      status: "success",
      message: "booking createad",
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      status: "failed",
      message: "try again failed to connect with calendar"
    })
  }
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
