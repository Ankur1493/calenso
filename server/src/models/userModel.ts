import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  meetings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Meetings",
  }]
});

const User = mongoose.model("User", userSchema);

export default User;
