const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  address: String,
  city: String,
  gov: String,
  date_of_birth: String,
  bio: String,
  avatar: String,
  theme: String,
  first_log: Boolean,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", UserSchema);
