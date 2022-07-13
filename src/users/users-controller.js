const user_service = require("./users-service");
const getUser = async (request, response) => {
  console.log("users-controller");
  try {
    const obj = request.body;
    let find = false;
    if (obj.username != undefined) {
      console.log("obj: ");
      console.log(obj);
      const results = await user_service.getUser(obj);
      console.log("results: ");
      console.log(results[0]);
      find = results[0] != undefined ? true : false;
    }
    response.status(200).json(find);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "error en sistema." });
  }
};

module.exports = { getUser };
