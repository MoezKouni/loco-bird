const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (user, res) => {
  let payload = {
    id: user._id,
  };
  jwt.sign(payload, process.env.SECRETKEY, (err, token) => {
    if (err) {
      throw err;
    }
    res.status(200).json({ token });
  });
};
