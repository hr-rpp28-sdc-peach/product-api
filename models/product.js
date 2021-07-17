const postCollection = require("../config/mongoDbConnection").getCollection("products")
const styleCollection = require("../config/mongoDbConnection").getCollection("styles")
const relatedCollection = require("../config/mongoDbConnection").getCollection("related")
const featureCollection =require("../config/mongoDbConnection").getCollection("features")
const skuCollection = require("../config/mongoDbConnection").getCollection("skus")
const photoCollection = require("../config/mongoDbConnection").getCollection("photos")

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
     const result =await col.find({"productId": id}).project({"productId":0,"_id":0}).toArray();
     const colSku = await skuCollection();
     const colPhoto = await photoCollection();
     const temp = await colPhoto.createIndex({"styleId":1})

     const ans = await Promise.all(result.map( async (cur)=>{
       let {id,default_style,...temp} = cur;
       let sku = await colSku.find({"styleId":id }).toArray();
       let rawPhotos = await colPhoto.find({"styleId":id+"" }).toArray();
       let skuObj={};
       let photos = rawPhotos.map(obj=>{
         return {"thumbnail_url": obj["thumbnail_url"], "url": obj["url"]}
        })
       for(let i =0; i<sku.length;i++) {
         let node  = sku[i];
         skuObj[node["id"]]={"size":node["size"],"quantity":node["quantity"]}
       }

       temp["style_id"]=cur["id"];
       temp["default?"]= cur["default_style"]===1;
       temp["photos"]=photos;
       temp["skus"]=skuObj;

       return temp

     }));

     return {"product_id": id, "results": ans};
  } catch(error){
    throw error;

  }

}

exports.findAll= async(page,count) =>{
  try {
     const col = await postCollection();
     const result =await col.find({}).project({"_id":0}).limit(count).skip((page-1)*count);
     return result.toArray();
  } catch(error){throw error;

  }

}

exports.getStyle = async (id)=> {
  try {
    const col = await relatedCollection();
    const result =await col.find({"current_product_id": id}).project({"related_product_id":1,"_id":0}).toArray();
    return result.map(cur=>cur["related_product_id"]);
 } catch(error){

   throw error;

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