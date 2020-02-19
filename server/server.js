const express = require("express");
var cors = require("cors");
const app = express();
const port = 8081; // updated from 3000
const path = require("path");
const bodyParser = require("body-parser");
const Data = require("../db/mongoSchema.js");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// This line is necessary to render React files
app.use(express.static(path.join(__dirname, "/../client/dist")));

// mongoDB -------------------------------------------------------
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/SDC-Descriptions", {
  useNewUrlParser: true
});

let db = mongoose.connection;

db.once("open", () => {
  console.log("conected to database");

  db.on("error", console.error.bind(console, "MongoDB connectiont error:"));
});

// get request using sendProductTask
app.get("/description", (req, res) => {
  const productId = req.query.ID;
  console.log(productId);
  Data.findOne({ product_id: productId }, (err, data) => {
    console.log("This is from the mongoDB query: ");

    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
// -----------------------------------------------------------------------------

// postgres --------------------------------------------------------------------



// -----------------------------------------------------------------------------
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
