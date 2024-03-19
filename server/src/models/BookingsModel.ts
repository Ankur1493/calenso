import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  meetingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Meeting",
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  startTime: {
    type: Date,
    required: true
  }
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;

