const store = require("./../store");

const signUpPass = (res) => {
  store.user = res.user;
  console.log("user data:", store.user);
  $("#message").text(
    `Thanks for signing up ${res.user.email}! Sign In to Play`
  );
  $("#sign-up-form").trigger("reset");
};

const signUpFail = () => {
  $("#message").text("Looks like something went wrong. Try Again!");
};

module.exports = {
  signUpPass,
  signUpFail,
};
