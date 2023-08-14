const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const productSchema = new mongoose.Schema({
    phone_name: String,
    brand: String,
    release_year: Number,
    storage:Number,
    memory : Number,
    camera : Number,
    screen_size:Number,
    img_url :String,
    price : Number
    
  });
  
const product = mongoose.model("product", productSchema);

module.exports = product;