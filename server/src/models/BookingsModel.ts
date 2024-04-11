import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  meeting_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Meeting',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  first_user: {
    type: String,
    required: true
  },
  guestUser: {
    type: String,
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  event: {
    calendarEventId: {
      type: String,
      required: true
    },
    meetLink: {
      type: String,
      required: true
    }
  },
  canceled: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;

