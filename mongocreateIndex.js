const { Db } = require("mongodb");

const photoC = require("./config/mongoDbConnection").getCollection("photos")

async function foo(){
const photo = await  photoC();
const res =  await photo.createIndex({"styleId":-1},{background: true})
console.log("success")
}
foo()
db.photos.createIndex({"styleId":1})
db.features.createIndex({"product_id":1})
db.products.createIndex({"id":1})
db.related.createIndex({"current_product_id":1})
db.skus.createIndex({"styleId":1})
db.styles.createIndex({"productId":1})
db.styles.createIndex({"id":1})


mongoimport -d product -c temp --type json --host localhost:27017 --file /Users/haoshenli/converted.json —-jsonArray
mongoimport -d product -c styles --type csv --headerline --host localhost:27017 --file /Users/haoshenli/Downloads/styles.csv --ignoreBlanks