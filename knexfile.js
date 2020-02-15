module.exports = {
  development: {
    client: "postgresql",
    connection: "postgres://postgres:password@localhost:5432/SDC-Description",
    migrations: {
      directory: "migrations"
    },
    seeds: {
      directory: "seeds"
    }
  }
};
