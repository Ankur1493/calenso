import mongoose from "mongoose";

const availabilitySchema = new mongoose.Schema({
  availableSchedule: [{
    DAY: String,
    START_TIME: String,
    END_TIME: String
  }]
});
const Availability = mongoose.model("Availability", availabilitySchema);
export default Availability;
