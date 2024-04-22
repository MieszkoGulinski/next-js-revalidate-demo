const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.json(["May 1", "May 2", "May 3"]);
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
