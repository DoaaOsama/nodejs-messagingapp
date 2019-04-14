var mongoose = require("mongoose");

var messageSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  text: {
    required: true
  },
  enteredAt: {
    type: Date
  }
});

var messageModel = mongoose.model("Blog", messageSchema);
module.exports = messageModel;
