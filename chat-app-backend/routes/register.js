const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const User = require("../model/User");
const genToken = require("../helpers/genToken");

// Register Route
router.post(
  "/",
  [
    body("first_name", "we want to know your name!").notEmpty(),
    body("last_name", "your lastname is required!").notEmpty(),
    body("email", "email is required so you can login next!").isEmail(),
    body(
      "phone",
      "your phone number, we won't call you, don't worry!"
    ).notEmpty(),
    body("address", "please tell us where are your living!").notEmpty(),
    body("date_of_birth", "please write your date of birth!").notEmpty(),
    body(
      "password",
      "write your password, minimum 6 characters and don't forget it!"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ msg: errors.array() });
    }

    let randomNum = Math.floor(Math.random() * 100) % 40;
    let newUser = new User({
      ...req.body,
      avatar: `https://randomuser.me/api/portraits/${req.body.sexe}/${randomNum}.jpg`,
    });

    bcrypt.genSalt(10, function (err, salt) {
      if (err) throw err;
      bcrypt.hash(newUser.password, salt, (err, hashedPassword) => {
        if (err) throw err;
        newUser.password = hashedPassword;
        newUser.save();
        genToken(newUser, res);
      });
    });
  }
);

module.exports = router;
