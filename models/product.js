const postCollection = require("../config/mongoDbConnection").getCollection("products")


exports.save = async(post) =>{
  try {
    const col = await postCollection();
    const result =await col.insertOne(post);
    return result.ops && result.ops[0];
 } catch(error)
  {console.log(error)
    throw "cant save"}
}

exports.findAll= async() =>{
  try {
     const col = await postCollection();
     return col.find({}).toArray();
  } catch(error){throw error;

  }

}