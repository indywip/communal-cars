const mongoose = require("mongoose");
const { Schema } = mongoose;

const carSchema = new Schema({
  Brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", carSchema);
