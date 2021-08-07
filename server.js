const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const routes = require("./routes")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
routes(app)

app.get("/", (req, res) => {
  res.status(200).send("Hellp World!");
})
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
module.exports = app
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })