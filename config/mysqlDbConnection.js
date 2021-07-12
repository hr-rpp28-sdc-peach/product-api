const mysql = require("mysql");

const dbName = "product";

const config = {
    host: "localhost",
    user: "root",
    database: "products"
  };

let _db = null;

async function connectDb() {
  if (!_db) {
    const client = mysql.createConnection(config);
    try {
    _db =await client.connect()

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
        console.log(error)
        throw "db collection error"
      }
    }
    return _col;

  }
}
