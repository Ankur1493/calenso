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
  length: {
    type: Number,
    enum: [10, 20, 30],
    required: true
  },
  availability: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Availability',
    required: true
  }
});

const Meeting = mongoose.model("Meeting", meetingSchema);

export default Meeting;
