const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// GET endpoint to return the required JSON response
app.get("/", (req, res) => {
  res.status(200).json({
    email: "habeebmusab@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/Musab1258/hng12-backend-tasks/tree/stage0"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
