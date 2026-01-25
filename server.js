app.post("/render-log", (req, res) => {
  const { topText, bottomText } = req.body;

  console.log("TOP:", topText);
  console.log("BOTTOM:", bottomText);

  res.sendStatus(200);
});
