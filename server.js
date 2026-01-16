const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/click", (req, res) => {
  const { letter } = req.body;
  console.log("User clicked:", letter);
  res.json({ status: "ok", received: letter });
});

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
