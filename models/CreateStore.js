const mongoose = require("mongoose");
const { Schema } = mongoose;

const CreateStoreSchema = new Schema({
  PhoneNum: {
    type: Number,
  },
  Domain: [
    {
      type: String,
    },
  ],
  Address: {
    type: String,
  },
  Name: {
    type: String,
  },
  Gallery: {
    type: String,
  },
});
const CreateStore = mongoose.model("CreateStore", CreateStoreSchema);
module.exports = { CreateStore };
