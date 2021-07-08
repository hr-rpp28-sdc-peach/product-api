var express= require("express");
var route = express.Router();

route.get("/", (req,res) => {
  console.log("list products")
  res.send()
})
route.get("/2331", (req,res) => {
  console.log("product information")
  res.send()

})

route.get("/related", (req,res) => {
  console.log("related product")
  res.send()

})
module.exports = route;