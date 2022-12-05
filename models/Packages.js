/** @format */

const { Number } = require("mongoose");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const packagesSchema = new Schema({ 
  packageName: {
    type: String,
  },
  vendorName: {
    type: String,
  },
  noOfDays: {
    type: Number,
    // required: true,
  },
  destinations: [
    {
      type: String,
    },
  ],
  pickupLocation: {
    type: String,
  },
  requirement : [
    {
      type: String,
    },
  ],
  recommendation  : [
    {
      type: String,
    },
  ],
  extras:
    {
      Included:[
        {
          type: String,
        },
      ],
      NotIncluded:[
        {
          type: String,
        },
      ],
    }
  ,
  itenary: [
    {
      day: {
        type: String,
        //  required: true,
      },
      location: {
        type: String,
        //  required: true,
      },
      time: {
        type: String,
        //  required: true,
      },
      events: [
        {
          type: String,
          //  required: true,
        },
      ],
    },
  ],
  // gallery: {
  //   type: String,
  // },

  transport:{

    Bus:{
      type: String,
    },
    Train:{
      type: String,
    },
    Airplane:{
      type: String,
    },
    Car:{
      type: String,
    },
},
  meals:{

    Breakfast:{
      type: String,
    },
    Lunch:{
      type: String,
    },
    Dinner:{
      type: String,
    },
  },
  price: {
    type: String,
  },
  img1: {
    data: Buffer,
    contentType: String,
  },
  img2: {
    data: Buffer,
    contentType: String,
  },
  img3: {
    data: Buffer,
    contentType: String,
  },
});
const Package = mongoose.model("Package", packagesSchema);
module.exports = { Package };
