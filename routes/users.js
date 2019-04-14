const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const userModel = require("../models/user");

/* GET users listing. */
router.get("/", async function(req, res, next) {
  userModel
    .find({})
    .exec()
    .then(users => res.send(users))
    .catch(err => next(createError(500, err.message)));
});

//create users
router.post("/", async function(req, res, next) {
  userModel
    .create(req.body)
    .then(user => {
      res.end(JSON.stringify(user));
    })
    .catch(err => {
      console.log(err);
      next(createError(400, err.message));
    });
});

//get one user
router.get("/:userId", (req, res, next) => {
  userModel
    .findById(req.params.userId)
    .exec()
    .then(users => res.send(users))
    .catch(err => next(createError(404, err.message)));
});

//update userdata
router.patch("/:userId", (req, res, next) => {
  userModel
    .findByIdAndUpdate(req.params.userId, req.body, { new: true })
    .exec()
    .then(users => res.send(users))
    .catch(err => next(createError(500, err.message)));
});

//delete user
router.delete("/:userId", (req, res, next) => {
  userModel
    .findByIdAndDelete(req.params.userId)
    .exec()
    .then(users => res.send(users))
    .catch(err => next(createError(500, err.message)));
});

module.exports = router;
