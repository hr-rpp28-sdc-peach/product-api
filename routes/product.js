var express= require("express");
var route = express.Router();
const postModel = require("../models/product")

route.post("/", async (req,res) =>{
  console.log('in routes', req)
  try {
    const newPost = await postModel.save(req.body);
    res.status(201).json(newPost)
  }catch(error) {
    console.log(error)
    res.status(500).send()
  }
})
route.get("/", async (req,res) => {
  let page = (Number(req.query.page))|| 1;
  let count = (Number(req.query.count))||5;
  try {
    const posts = await postModel.findAll(page,count);
    res.status(200).json(posts)
  }catch(error) {
    res.status(500).send()
  }
})
route.get("/:product_id", async (req,res) => {
  let productId = Number(req.params.product_id);
  if (!productId) {
    res.status(500).send("invalid product_id")
  }
  try {
    const post = await postModel.findId(productId);
    res.status(200).json(post)
  }catch(error) {

    res.status(500).send(error)
  }
})
route.get("/:product_id/styles", async (req,res) => {
  let productId = Number(req.params.product_id);
  if (!productId) {
    res.status(500).send("invalid product_id")
  }
  try {
    const post = await postModel.findStyle(productId);
    res.status(200).json(post)
  }catch(error) {
    res.status(500).send(error)
  }
})

route.get("/:product_id/related", async (req,res) => {
  let productId = Number(req.params.product_id);
  console.log("related product")
  try {
    const posts = await postModel.getRelated(productId);
    res.status(200).json(posts)
  }catch(error) {
    console.log(error)
    res.status(500).send()
  }


})
module.exports = route;