const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  mongoose.connect(
    process.env.MONGOURI,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
      if (err) {
        throw err;
      }
      console.log("Database connected...");
    }
  );
};
