const product = require("./product.js");
module.exports = (app) => {
  app.use("/products",product)
}