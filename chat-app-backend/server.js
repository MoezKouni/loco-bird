const express = require("express");
const app = express();

// Middlewares
app.use(express.json());

// Routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});
