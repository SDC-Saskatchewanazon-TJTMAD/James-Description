const express = require("express");
var cors = require("cors");
const app = express();
const port = 8081; // updated from 3000
const path = require("path");
const bodyParser = require("body-parser");
// const Data = require("../db/mongoSchema.js"); // mongoDB
// const db = require("../db/index.js"); //mongoDB
const db = require("../db/postgres.js"); //postgres

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// This line is necessary to render React files
app.use(express.static(path.join(__dirname, "/../client/dist")));

// mongoDB -------------------------------------------------------

// get request using sendProductTask
// app.get("/description", (req, res) => {
//   const productId = req.query.ID;
//   console.log(productId);
//   Data.findOne({ product_id: 1 }, (err, data) => {
//     console.log("This is from the mongoDB query: ", data);

//     if (err) {
//       res.send(err);
//     } else {
//       res.send(data);
//     }
//   });
// });
// -----------------------------------------------------------------------------

// postgres --------------------------------------------------------------------

app.get("/description", (req, res) => {
  console.log("hello" + req.query.ID);
  console.log("params" + JSON.stringify(req.params));

  const productId = req.query.ID;
  db.sendProductTask(productId, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      console.log(data);
      res.send(data);
    }
  });
});

// -----------------------------------------------------------------------------
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
