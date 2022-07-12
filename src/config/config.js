require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "development",
  isProduction: process.env.NODE_ENV === "production",
};

const dataBaseConfig = {
  dbUrl: process.env.DATABASE_URL,
};

const apiConfig = {
  apiPort: process.env.API_PORT || 5000,
  apiVersion: process.env.API_VERSION,
  apiKey: process.env.API_KEY,
};
module.exports = { config, dataBaseConfig, apiConfig };
