const store = require("./../store");

const signUpPass = (res) => {
  store.user = res.user;
  console.log("user data:", store.user);
  $("#message").text(
    `Thanks for signing up ${res.user.email}! Sign In to Play`
  );
};

module.exports = {
  signUpPass,
};
