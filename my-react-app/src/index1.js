const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD Pipeline Working Successfully 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

const fs = require('fs');
fs.writeFileSync('status.txt', 'CI/CD Pipeline is operational.')
