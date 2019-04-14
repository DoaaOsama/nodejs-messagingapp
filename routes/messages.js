const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const messageModel = require("../models/message");

/* GET users listing. */
router.get("/", async function(req, res, next) {
  messageModel
    .find({})
    .exec()
    .then(messages => res.send(messages))
    .catch(err => next(createError(500, err.message)));
});

//create users
router.post("/", async function(req, res, next) {
  messageModel
    .create(req.body)
    .then(message => {
      res.end(JSON.stringify(message));
    })
    .catch(err => {
      console.log(err);
      next(createError(400, err.message));
    });
});

router.get("/:userId", (req, res, next) => {
  messageModel
    .findById(req.params.userId)
    .exec()
    .then(messages => res.send(messages))
    .catch(err => next(createError(404, err.message)));
});

router.delete("/:messageId", (req, res, next) => {
  messageModel
    .findByIdAndDelete(req.params.messageId)
    .exec()
    .then(messages => res.send(messages))
    .catch(err => next(createError(500, err.message)));
});

module.exports = router;
