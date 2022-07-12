const app = require("./src/config/router-api");
const sequelize = require("./src/config/database-config");

const { User, UserSchema, USER_TABLE } = require("./src/users/user-model");
async function main() {
  try {
    console.log("creando tabla");
    await sequelize.define(USER_TABLE, UserSchema);
    await sequelize.sync();
  } catch (error) {
    console.error("error: ", error);
  }
}
main();
