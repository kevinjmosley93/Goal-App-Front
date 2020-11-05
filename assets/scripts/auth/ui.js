const store = require("./../store");

const signUpPass = (res) => {
  store.user = res.user;
  console.log("user data:", store.user);
  $("#message").text(
    `Thanks for signing up ${res.user.email}! Sign In to Play`
  );
  $("#sign-up-form").trigger("reset");
};

const signInPass = (res) => {
  store.user = res.user;
  $("#message").text(`${res.user.email} is signed in!`);
  $("#sign-in-form").trigger("reset");
  $("#change-password-form").show();
  $("#sign-out").show();
  $("#goal-form").show();
  $("#sign-up-form").hide();
  $("#sign-in-form").hide();
};

const signOutPass = () => {
  store.user = null;
  $("#message").text("");
  $("#goal-message").text("");
  $("#change-password-form").hide();
  $("#sign-out").hide();
  $("#sign-up-form").show();
  $("#sign-in-form").show();
  $("#goal-form").hide();
};

const onChangePasswordPass = () => {
  $("#message").text("Password changed successfully!");
  $("#goal-message").text("");
  $("#change-password-form").trigger("reset");
};

const onChangePasswordFail = () => {
  $("#message").text("Error on change password, Please try again!");
};

const signUpFail = () => {
  $("#message").text("Looks like something went wrong. Try Again!");
  $("#sign-up-form").trigger("reset");
  $("#sign-in-form").trigger("reset");
};

module.exports = {
  signUpPass,
  signInPass,
  signOutPass,
  signUpFail,
  onChangePasswordPass,
  onChangePasswordFail,
};
