"use strict";
const authEvents = require("./auth/events");
const goalEvents = require("./goals/events");

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  //hidden on page load
  $(".change-password-model-btn").hide();
  $("#change-password-form").hide();
  $("#sign-out").hide();
  $(".create-model-btn").hide();
  $("#goal-form").hide();
  $("#all-goals-form").hide();
  // $("#sign-up-form").hide();
  // $("#sign-in-form").hide();
  //Events
  $("#sign-up-form").on("submit", authEvents.signUpClick);
  $("#sign-in-form").on("submit", authEvents.signInClick);
  $("#sign-out").on("submit", authEvents.signOutClick);
  $("#change-password-form").on("submit", authEvents.changePasswordClick);
  $("#goal-form").on("submit", goalEvents.createGoalClick);
  $("#all-goals-form").on("submit", goalEvents.allGoalsClick);
});
