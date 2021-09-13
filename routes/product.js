var express= require("express");
var route = express.Router();
const postModel = require("../models/product")
const redis = require('redis')
const client=redis.createClient();
client.on("error", err =>{
  console.log('redis connect error', err);
})
// function cache(req, res, next) {
//   const org = req.query.org;
//   client.get(org, function (err, data) {
//   if (err) throw err;

//   if (data != null) {
//   res.send(respond(org, data));
//   } else {
//   next();
//   }
//   });
//   }
// route.use(cache())
route.post("/", async (req,res) =>{
  try {
    const newPost = await postModel.save(req.body);
    res.status(201).json(newPost)
  }catch(error) {
    console.log(error)
    res.status(500).send(error)
  }
})
route.get("/", async (req,res) => {
  let page = (Number(req.query.page))|| 1;
  let count = (Number(req.query.count))||5;
  try {
    const posts = await postModel.findAll(page,count);
    res.status(200).json(posts)
  }catch(error) {
    res.status(500).send(error)
  }
})
route.get("/:product_id", async (req,res) => {
  let productId = Number(req.params.product_id);
  if (!productId) {
    res.status(500).send("invalid product_id")
  }
  try {
    let key= "product"+productId;
    client.get(key, async (err, jobs) =>{
      if (err) throw err;
      if (jobs) {res.status(200).json(JSON.parse(jobs))
      }
     else {

    const post = await postModel.findId(productId);
    client.setex(key,600, JSON.stringify(post))
    res.status(200).json(post)
    }

  })
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

  // try {
  //   const posts = await postModel.getRelated(productId);
  //   res.status(200).json(posts)
  // }
  try {
    let key= "related"+productId;
    client.get(key, async (err, jobs) =>{
      if (err) throw err;
      if (jobs) {res.status(200).json(JSON.parse(jobs))
      }
     else {

    const post = await postModel.getRelated(productId);
    client.setex(key,600, JSON.stringify(post))
    res.status(200).json(post)
    }

  })
  }


  catch(error) {

    res.status(500).send(error)
  }


})
module.exports = route;