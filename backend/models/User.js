const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  rentedVehicles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Vehicle",
      required: true,
    },
  ],
  registeredVehicles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Vehicle",
      required: true,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
