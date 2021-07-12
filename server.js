const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 6000;
const routes = require("./routes")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
routes(app)

app.get("/", (req, res) => {
  res.send("Hellp World!");
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
