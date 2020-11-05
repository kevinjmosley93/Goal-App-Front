const config = require("./../config");
const store = require("../store");

const createGoal = (data) => {
  store.user = data;
  console.log("user is:", data);
  return $.ajax({
    url: `${config.apiUrl}/goals`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${store.user.token}`,
    },
    data: data,
  });
};

module.exports = {
  createGoal,
};
