const app = require("./src/config/router-api");
const sequelize = require("./src/config/database-config");
const user = require("./src/users/users-router");
//const { User, UserSchema, USER_TABLE } = require("./src/users/user-model");

app.use("/user", user);

async function main() {
  console.log("index");
  try {
    await sequelize.sync();
  } catch (error) {
    console.log(error);
  }
}

main();
