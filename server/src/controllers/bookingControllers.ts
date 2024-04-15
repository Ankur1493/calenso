import { Request, Response } from "express"
import Booking from "../models/BookingsModel"
import Meeting from "../models/meetingsModel";
import { createEvent, deleteEvent } from "../utils/googleCalendarFunctions";
import User from "../models/userModel";
import isValidObjectId from '../utils/isValidObjectId';


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

export const getBookingDetails = async (req: Request, res: Response) => {
  try {

    const bookingId = req.params.id as string;
    const user = req.user;
    if (!user) {
      return res.status(409).json({
        status: "failed",
        message: "you are not authorized"
      })
    }
    const DBuser = await User.findById(user?._id).populate("bookings");

    if (!DBuser) {
      return res.status(409).json({
        status: "failed",
        message: "you are not authorized"
      })
    }

    const bookingExists = DBuser.bookings.findIndex(booking => booking._id.toString() == bookingId);
    if (bookingExists === -1) {
      return res.status(400).json({
        status: "failed",
        message: "try accessing own booking for fun"
      })
    }

    const booking = DBuser.bookings[bookingExists];
    return res.status(200).json({
      status: "success",
      message: "Here's your booking",
      booking
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({
      status: "failed",
      message: "try again failed to connect with calendar"
    })
  }
}

export const createBooking = async (req: Request, res: Response) => {
  try {
    const guestUser = req.user;
    const { START_TIME, meetingId } = req.body

    if (!guestUser) {
      return res.status(409).json({
        status: "failed",
        message: "you are not authenticated"
      })
    }

    if (!START_TIME || !meetingId || !isValidObjectId(meetingId)) {
      return res.status(400).json({
        status: "failed",
        message: "fill all the fields properly"
      })
    }
    const startTime = new Date(START_TIME);
    const currentTime = Date.now();

    if ((startTime.getTime() - currentTime) < 0) {
      return res.status(400).json({
        status: "failed",
        message: "select date and time which is ahead of us"
      })
    }

    const meeting = await Meeting.findById(meetingId).populate('availability')
    if (!meeting) {
      return res.status(400).json({
        status: "failed",
        message: "select a proper meeting"
      })
    }
    const { title, info, duration } = meeting;
    if (!title || !info || !duration) {
      return res.status(500).json({
        status: "Failed",
        message: "this one's on us try again"
      })
    }

    const endTime = new Date(startTime.getTime() + duration * 60000);

    const ownerUser = await User.findById(meeting.user_id);
    if (!ownerUser) {
      return res.status(400).json({
        status: "failed",
        message: "the meeting owner doesn't exist"
      })
    }

    const ownerUserEmail = ownerUser.email as string;
    if (ownerUserEmail === guestUser.email) {
      return res.status(400).json({
        status: "failed",
        message: "You can't create a booking with yourself"
      })
    }


    const accessToken = guestUser.googleAccessToken as string;

    if (!accessToken) {
      return res.status(400).json({
        status: "failed",
        message: "you have not connected your calendar"
      })
    }

    const overlappingBookings = await Booking.find({
      $or: [
        { first_user: guestUser.email, $or: [{ startTime: { $lt: endTime }, endTime: { $gt: startTime } }] },
        { guestUser: guestUser.email, $or: [{ startTime: { $lt: endTime }, endTime: { $gt: startTime } }] },
        { first_user: ownerUserEmail, $or: [{ startTime: { $lt: endTime }, endTime: { $gt: startTime } }] },
        { guestUser: ownerUserEmail, $or: [{ startTime: { $lt: endTime }, endTime: { $gt: startTime } }] }
      ]
    });
    if (overlappingBookings && overlappingBookings.length > 0) {
      return res.status(409).json({
        status: "failed",
        message: "One or both users are already booked in the requested time slot"
      })
    }


    const eventStatus = await createEvent({
      title,
      description: info,
      firstUser: guestUser.email,
      guestUser: ownerUserEmail,
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
      first_user: ownerUserEmail,
      guestUser: guestUser.email,
      startTime,
      endTime,
      event: eventStatus
    })

    if (!bookingBody) {
      await deleteEvent(eventStatus.calendarEventId as string, accessToken);
      return res.status(500).json({
        message: "this one's on us try again",
        status: "failed"
      })
    }

    await User.findOneAndUpdate(
      { email: ownerUserEmail },
      { $push: { bookings: bookingBody._id } },
      { new: true }
    );
    await User.findOneAndUpdate(
      { email: guestUser.email },
      { $push: { bookings: bookingBody._id } },
      { new: true }
    );

    return res.status(200).json({
      status: "success",
      message: "booking createad",
      bookingId: bookingBody._id
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      status: "failed",
      message: "try again failed to connect with calendar"
    })
  }
}

export const cancelBooking = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const user = req.user;
    if (!user) {
      return res.status(409).json({
        status: "failed",
        message: "not authorized"
      })
    }
    if (!isValidObjectId(id)) {
      return res.status(400).json({
        status: "failed",
        message: "don't interfere with id's"
      })
    }

    const DBuser = await User.findById(user._id);
    if (!DBuser) {
      return res.status(400).json({
        status: "failed",
        message: "user galat hai"
      })
    }
    const accessToken = DBuser.googleAccessToken as string

    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(400).json({
        status: "failed",
        message: "wrong booking id"
      })
    }
    const deleteSuccess = await deleteEvent(booking.event?.calendarEventId as string, accessToken);

    if (!deleteSuccess) {
      return res.status(400).json({
        status: "failed",
        message: "failed to delete meeting, try again"
      })
    }

    booking.canceled = true;
    await booking.save();

    return res.status(200).json({
      status: "success",
      message: "booking deleted",
    })
  } catch (err) {
    return res.status(500).json({
      status: "failed",
      message: "this one's on us try again"
    })
  }
}

export const updateBooking = (req: Request, res: Response) => {
  return res.status(200).json({
    status: "success",
    message: "booking updated",
  })
}
