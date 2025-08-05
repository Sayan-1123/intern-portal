const express = require("express");
const cors = require("cors");
const users = require("./data/userData");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
