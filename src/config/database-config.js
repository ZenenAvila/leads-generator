const Sequelize = require("sequelize");
const { dataBaseConfig, config } = require("./config");

const options = {
  dialect: "postgres",
  logging: false,
};

if (config.isProduction) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

const sequelize = new Sequelize(dataBaseConfig.dbUrl, options);

// const sequelize = new Sequelize("bissness-leads", "postgres", "contrasena", {
//   host: "localhost",
//   dialect: "postgres",
// });

module.exports = sequelize;
