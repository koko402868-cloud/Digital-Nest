const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/order", (req, res) => {
    const { letter, user } = req.body;
    console.log(`Letter "${letter}" received from ${user}`);
    res.json({ message: `Letter "${letter}" received!` });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
