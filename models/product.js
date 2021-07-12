const postCollection = require("../config/mongoDbConnection").getCollection("products")
const styleCollection = require("../config/mongoDbConnection").getCollection("styles")
const relatedCollection = require("../config/mongoDbConnection").getCollection("related")
const featureCollection =require("../config/mongoDbConnection").getCollection("features")

exports.save = async(post) =>{
  try {
    const col = await postCollection();
    const result =await col.insertOne(post);
    return result.ops && result.ops[0];
 } catch(error)
  {
    throw "cant save"}
}

exports.findId= async(id) =>{
  try {
     const col = await postCollection();
     const fea = await featureCollection();
     const result =await col.findOne({"id": id});
     const feature = await fea.find({"product_id": id},).project({"feature": 1 ,"value":1,"_id":0}).toArray()
     let {_id, ...ans} = result

     ans["features"]=feature;
     return ans;
  } catch(error){
    cons
    throw error;

  }

}
exports.findStyle= async(id) =>{
  try {
     const col = await styleCollection();
     const result =await col.find({"product_id": id});
     return result.toArray();
  } catch(error){
    throw error;

  }

}

exports.findAll= async() =>{
  try {
     const col = await postCollection();
     const result =await col.find({}).limit(5);
     return result.toArray();
  } catch(error){throw error;

  }

}

exports.getRelated = async (id)=> {
  try {
    const col = await relatedCollection();
    const result =await col.find({"current_product_id": id}).project({"related_product_id":1,"_id":0}).toArray();
    return result.map(cur=>cur["related_product_id"]);
 } catch(error){

   throw error;

 }
}