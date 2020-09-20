const express = require("express");
const connectDB = require("./helpers/connectDB");
const app = express();

// Middlewares
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});
