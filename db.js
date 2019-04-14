const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/messagingApp", {
  useNewUrlParser: true,
  useCreateIndex: true
});

// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function() {
//   console.log("connected");
// });
