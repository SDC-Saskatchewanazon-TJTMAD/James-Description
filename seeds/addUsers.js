const faker = require("faker");

const categories = ["hockey", "syrup", "music", "camping", "hunting", "food"];

const createFakeProduct = () => ({
  product_name: faker.commerce.productName(),
  product_description: faker.random.words(),
  price: faker.random.number({ min: 1, max: 100 }),
  category_id: categories[faker.random.number(5)],
  rating: faker.random.number({ min: 1, max: 5 })
});

exports.seed = async function(knex, Promise) {
  // Users
  const fakeUsers = [];
  const desiredFakeUsers = 10;
  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeProduct());
  }
  await knex("description").insert(fakeUsers);
};
