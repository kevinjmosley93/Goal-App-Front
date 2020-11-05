const store = require("../store");

const goalCreated = (res) => {
  store.user = res.user._id;
  console.log("user is:", store.user);
  $("#message").text(`${store.user.email} is playing!`);
};

module.exports = {
  goalCreated,
};
