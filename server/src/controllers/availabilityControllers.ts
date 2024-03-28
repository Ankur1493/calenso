import Availability from "../models/availabilityModel";
import { IAvailability } from "../types/custom";

export const updateAvailability = async ({ _id, availableSchedule }: IAvailability) => {
  try {
    const availability = await Availability.findById(_id);
    if (!availability) {
      throw new Error("Availability not found");
    }
    availability.set({ availableSchedule });

    const updatedAvailability = await availability.save();

    return updatedAvailability;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
