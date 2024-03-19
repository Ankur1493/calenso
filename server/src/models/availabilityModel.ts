import mongoose from "mongoose";

const availabilitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  availableDays: [{
    day: {
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
    }
  }]
});

const Availability = mongoose.model("Availability", availabilitySchema);
export default Availability;
