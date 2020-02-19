const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    //   _id: Number,
    productName: String,
    productDescription: String,
    price: Number,
    category_id: Number,
    productRatings: Number
  },
  { collection: "descriptions" }
);
module.exports = mongoose.model("Data", DataSchema);
