const config = require("./../config");
const store = require("../store");

const createGoal = (data) => {
  console.log("user is:", store.user);
  return $.ajax({
    url: `${config.apiUrl}/goals`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${store.user.token}`,
    },
    user: store.user,
    data: data,
  });
};

const getAllGoals = () => {
  return $.ajax({
    url: `${config.apiUrl}/goals`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${store.user.token}`,
    },
  });
};

const updateGoal = (data) => {
  console.log("api data ", store.goal);

  return $.ajax({
    url: `${config.apiUrl}/goals/${store.goal._id}`,
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${store.user.token}`,
    },
    data: data,
  });
};

module.exports = {
  createGoal,
  getAllGoals,
  updateGoal,
};
