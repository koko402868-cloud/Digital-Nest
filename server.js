const express = require("express");
const app = express();
const PORT = 3000;

// JSON body ဖတ်ဖို့
app.use(express.json());

// frontend files serve
app.use(express.static(""Do));

// 🔴 ဒီနေရာမှာ ထည့်ရမယ်
app.post("/render-log", (req, res) => {
  const { topText, bottomText } = req.body;

  console.log("TOP:", topText);
  console.log("BOTTOM:", bottomText);

  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
