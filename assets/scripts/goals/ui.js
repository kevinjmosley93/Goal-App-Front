const store = require("../store");

const goalCreated = (res) => {
  store.user = res.user._id;
  $("#message").text(`${store.user.email} is playing!`);
};

module.exports = {
  goalCreated,
};
