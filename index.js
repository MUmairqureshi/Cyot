/** @format */

const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const connect = mongoose
  .connect(
    `mongodb+srv://muntazim:muntazim@cluster0.ps1a1r1.mongodb.net/Muntazim`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log("not connected"));

app.use(cors());
//to not get any deprecation warning or error
//support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({ extended: true }));
//to get json data
// support parsing of application/json type post data
app.use(express.json());
app.use(cookieParser());

//api routes of our project
app.use("/api/users", require("./routes/user"));
app.use("/api/car", require("./routes/carrental"));
app.use("/api/hotel", require("./routes/hotel"));
app.use("/api/profilepage", require("./routes/profile"));
app.use("/api/packages", require("./routes/packages"));
app.use("/api/trips", require("./routes/trips"));
app.use("/api/newtrips", require("./routes/newtrips"));
app.use("/api/order", require("./routes/orderpage"));
app.use("/api/calender", require("./routes/calender"));
app.use("/api/contactus", require("./routes/contactus"));
app.use("/api/createowntrip", require("./routes/Createowntrip"));
app.use("/api/CreateStore", require("./routes/createStore"));

//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use("/uploads", express.static("uploads"));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}
//home route
app.get("/", (req, res) => {
  res.send("hello world");
});

const port = process.env.PORT || 5000;
//server is listening in port 5000
app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
