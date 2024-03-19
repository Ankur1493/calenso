import mongoose from "mongoose";

const meetingsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }]
});

const Meetings = mongoose.model("Meetings", meetingsSchema);

export default Meetings;
