const store = require("../store");
const getFormInfo = require("./../../../lib/get-form-fields");
const api = require("./api");
const ui = require("./ui");

const signUpClick = (event) => {
  event.preventDefault();
  const form = event.target;
  const data = getFormInfo(form);
  api.signUp(data).then(ui.signUpPass).catch();
  console.log("data is:", data);
  console.log("event is:", event);
};

module.exports = {
  signUpClick,
};
