// const postCollection = require("../config/mysqlDbConnection.js").getCollection("products")


// exports.save = async(post) =>{
//   try {
//     const col = await postCollection();
//     const result =await col.insertOne(post);
//     return result.ops && result.ops[0];
//  } catch(error)
//   {
//     throw "cant save"}
// }

// exports.findId= async(id) =>{
//   try {
//      const col = await postCollection();
//      const result =await col.find({"id": id});
//      return result.toArray();
//   } catch(error){
//     throw error;

//   }

// }
// exports.findStyle= async(id) =>{
//   try {
//      const col = await styleCollection();
//      const result =await col.find({"id": id});
//      return result.toArray();
//   } catch(error){
//     throw error;

//   }

// }

// exports.findAll= async() =>{
//   try {
//      const col = await postCollection();
//      const result =await col.find({});
//      return result.toArray();
//   } catch(error){throw error;

//   }

// }
// mongoimport -d product -c products --type csv --headerline --host localhost:27017 --file /Users/haoshenli/Downloads/product.csv --ignoreBlanks