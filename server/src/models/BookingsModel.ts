import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  meeting_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Meeting',
    required: true
  },
  first_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  second_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  scheduledTime: {
    type: Date,
    required: true
  },
  additionalInfo: {
    type: String,
    required: false
  }
}, { timestamps: true });
const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;

