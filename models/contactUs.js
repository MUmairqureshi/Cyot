/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;
const contactUsSchema = new Schema({
    Name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
      
})
const contactUs = mongoose.model("contactUs", contactUsSchema);

module.exports = { contactUs };
