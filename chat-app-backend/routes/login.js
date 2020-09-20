const router = require("express").Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const authMiddleware = require("../middlewares/authMiddleware");
const User = require("../models/User");
const genToken = require("../helpers/genToken");

// LOAD USER
router.get("/", authMiddleware, (req, res) => {
  User.findById(req.userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ msg: "No user with this ID" });
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ msg: "Server Error" });
    });
});

// LOGIN USER
router.post(
  "/",
  [
    body("email", "Please write a valid email!").isEmail(),
    body("password", "Please write your password!").notEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ msg: errors.array() });
    }

    User.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          return res
            .status(401)
            .json({ msg: [{ msg: "Please register before!" }] });
        } else {
          bcrypt.compare(req.body.password, user.password, (err, match) => {
            if (err) {
              throw err;
            } else if (!match) {
              return res
                .status(401)
                .json({ msg: [{ msg: "Wrong Password!" }] });
            } else {
              genToken(user, res);
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.send("Server Error");
      });
  }
);

module.exports = router;
