const config = require("./../config");
const store = require("../store");

const signUp = (data) => {
  store.user = data;

  console.log("api data is:", data);
  return $.ajax({
    url: `${config.apiUrl}/sign-up`,
    method: "POST",
    data: data,
  });
};

const signIn = (data) => {
  return $.ajax({
    url: `${config.apiUrl}/sign-in`,
    method: "POST",
    data: data,
  });
};

module.exports = {
  signUp,
  signIn,
};
