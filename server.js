const express = require('express');
const app = express();
const port = 6000;
const routes = require("./routes")
routes(app)

app.get("/", (req, res) => {
  res.send("Hellp World!");
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
