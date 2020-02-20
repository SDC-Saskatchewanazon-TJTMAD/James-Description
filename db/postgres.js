const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "SDC-Description",
  password: "password",
  port: 5432
});

client.connect();

const sendProductTask = (productId, callback) => {
  client.query(
    `SELECT product_name, product_description, price, rating FROM description where product_id = '${productId}'`,
    (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
      client.end();
    }
  );
};

module.exports = { sendProductTask };
