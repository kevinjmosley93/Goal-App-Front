const store = require("./../store");

const signUpPass = (res) => {
  store.user = res.user;
  $("#message").text(
    `Thanks for signing up ${res.user.email}! Sign In to track your future success!`
  );
  $("#sign-up-form").trigger("reset");
};

const signInPass = (res) => {
  store.user = res.user;
  $("#message").text(`${res.user.email} is signed in!`);
  $("#sign-in-form").trigger("reset");
  $(".change-password-model-btn").show();
  $("#change-password-form").show();
  $("#all-goals-form").show();
  $("#sign-out").show();
  $(".create-model-btn").show();
  $("#goal-form").show();
  $("#sign-up-form").hide();
  $("#sign-in-form").hide();
};

const signOutPass = () => {
  store.user = null;
  $("#goals").text("");
  $("#message").text("Signed out successfully");
  $("#goal-message").text("");
  $("#success-goal-message").text("");
  $(".change-password-model-btn").hide();
  $("#change-password-form").hide();
  $("#all-goals-form").hide();
  $("#sign-out").hide();
  $("#sign-up-form").show();
  $("#sign-in-form").show();
  $(".create-model-btn").hide();
  $("#goal-form").hide();
};

const onChangePasswordPass = () => {
  $("#change-password-form-message").text("Password changed successfully!");
  $("#goal-message").text("");
  $("#success-goal-message").text("");
  $("#change-password-form").trigger("reset");
};

const onChangePasswordFail = () => {
  $("#change-password-form-message").text(
    "Error on change password, Please try again!"
  );
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
