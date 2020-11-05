const store = require("../store");

const goalCreated = (res) => {
  store.user = res.user;
  $("#message").text(`${res.user} is playing!`);
};

module.exports = {
  goalCreated,
};
