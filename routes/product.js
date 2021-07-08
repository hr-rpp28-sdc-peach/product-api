var express= require("express");
var route = express.Router();
const postModel = require("../models/product")

route.post("/", async (req,res) =>{
  try {
    const newPost = await postModel.save(req.body);
    res.status(201).json(newPost)
  }catch(error) {
    console.log(error)
    res.status(500).send()
  }
})
route.get("/", async (req,res) => {
  try {
    const posts = await postModel.findAll();
    console.log(posts)
    res.status(201).json(posts)
  }catch(error) {
    console.log(error)
    res.status(500).send()
  }
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