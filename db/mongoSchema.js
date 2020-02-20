const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    product_id: Number,
    product_name: String,
    product_description: String,
    price: Number,
    category_id: String,
    rating: Number
  },
  { collection: "descriptions" }
);
module.exports = mongoose.model("Data", DataSchema);
