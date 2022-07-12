const { User, UserSchema, USER_TABLE } = require("./user-model");

const getUser = async (request, response) => {
  console.log("users-controller");
  try {
    //const results = await User.findAll();
    //const results = "Resultado";
    response.status(200).json(true);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUser };
