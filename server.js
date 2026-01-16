const express = require("express");
const app = express();

app.use(express.json());

// public folder ကို serve
app.use(express.static("Do"));

// button press API
app.post("/press", (req, res) => {
  const { key } = req.body;
  console.log("User pressed:", key); // Render logs မှာပေါ်မယ်
  res.json({ ok: true, key });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
