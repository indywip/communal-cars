const mongoose = require("mongoose");
const { Schema } = mongoose;

const vehicleSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: false,
  },
  availability: {
    type: String,
    required: true,
  },
  rate: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  isRented: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
