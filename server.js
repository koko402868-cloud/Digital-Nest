const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/press", (req, res) => {
  const { key } = req.body;

  console.log("User pressed:", key); // 👈 Render log ထဲမှာပေါ်မယ်

  res.json({ status: "ok", key });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
