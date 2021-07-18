const photoC = require("./config/mongoDbConnection").getCollection("photos")

async function foo(){
const photo = await  photoC();
const res =  await photo.createIndex({"styleId":-1},{background: true})
console.log("success")
}
foo()