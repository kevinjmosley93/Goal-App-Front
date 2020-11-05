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

const signOut = (data) => {
  return $.ajax({
    url: `${config.apiUrl}/sign-out`,
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${store.user.token}`,
    },
    data: data,
  });
};
const changePassword = (data) => {
  return $.ajax({
    url: `${config.apiUrl}/change-password`,
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${store.user.token}`,
    },
    data: data,
  });
};
module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
};
