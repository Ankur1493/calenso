import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  info: {
    type: String,
    required: false
  },
  availability: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Availability',
    required: true
  }
});

const Meeting = mongoose.model("Meeting", meetingSchema);

export default Meeting;
