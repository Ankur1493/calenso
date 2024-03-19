import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  meetings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Meeting'
  }],
  bookings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking'
  }]
});

const User = mongoose.model('User', userSchema);

export default User;
