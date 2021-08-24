const MongoClient = require("mongodb").MongoClient;

// const url = "mongodb://host.docker.internal:27017";
const url = "mongodb://35.174.205.247:27017";

const dbName = "product";

let _db = null;

async function connectDb() {
  if (!_db) {
    const client = new MongoClient(url,{useUnifiedTopology:true});
    try {
    await client.connect();
    _db = await client.db(dbName);

    } catch(error) {

    throw "db connect error"
    }
  }
  return _db;
}

exports.getCollection = (collection) => {
  let _col = null;
  return async ()=>{
    if (!_col) {
      try {
      const db = await connectDb();
      _col =  await db.collection(collection)
      } catch(error) {

        throw "db collection error"
      }
    }
    return _col;

  }
}
