/** @format */

//NOdeGeocoder module for geocoding
const NodeGeocoder = require("node-geocoder");
const options = {
  provider: "mapquest",
  apiKey: "5zgzKNXfQjL1kB4NVxSvHcDiqUZucEvz", // for Mapquest, OpenCage, Google Premier
  formatter: null, // 'gpx', 'string', ...
};
const geocoder = NodeGeocoder(options);
module.exports = geocoder;
