const { userDefin } = require("./user-model");

const getUser = async (user) => {
  try {
    const results = await userDefin.findAll({
      where: { userName: user.username, password: user.password },
    });
    return results;
  } catch (error) {
    return false;
  }
};

module.exports = { getUser };
