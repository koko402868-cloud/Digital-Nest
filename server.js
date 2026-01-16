const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// receive numbers
app.post("/send", (req, res) => {
  const numbers = req.body.numbers;
  console.log("Numbers received:", numbers);

  res.json({
    success: true,
    received: numbers
  });
});

// test route
app.get("/", (req, res) => {
  res.send("Backend running OK");
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
