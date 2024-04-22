const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.json(["March 20", "March 21", "March 22"]);
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
