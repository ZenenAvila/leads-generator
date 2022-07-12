const app = require("./src/config/router-api");
const sequelize = require("./src/config/database-config");
const user_ = require("./src/users/users-router");
app.use("/user", user_);

const { User, UserSchema, USER_TABLE } = require("./src/users/user-model");
async function main() {
  console.log("index");
  try {
    console.log("creando tabla");
    await sequelize.define(USER_TABLE, UserSchema);
    await sequelize.sync();
  } catch (error) {
    console.log(error);
  }
}

main();
