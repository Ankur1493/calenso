import mongoose from "mongoose";

const availabilitySchema = new mongoose.Schema({
  availableSchedule: [{
    DAY: String,
    START_TIME: Date,
    END_TIME: Date
  }]
});
const Availability = mongoose.model("Availability", availabilitySchema);
export default Availability;
