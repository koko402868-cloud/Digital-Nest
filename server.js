const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(".")); // serve HTML, CSS, JS files

// Order endpoint
app.post("/order", (req, res) => {
  const { product } = req.body;
  console.log("Order received:", product); // ဒီမှာ မင်း console မှာ ကြည့်လို့ရမယ်
  res.json({ message: `Order for ${product} received!` });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
