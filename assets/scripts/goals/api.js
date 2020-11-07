const config = require("./../config");
const store = require("../store");

const createGoal = (data) => {
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
  return $.ajax({
    url: `${config.apiUrl}/goals/${store.goal._id}`,
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${store.user.token}`,
    },
    data: data,
  });
};

const deleteGoal = (data) => {
  return $.ajax({
    url: `${config.apiUrl}/goals/${store.goal._id}`,
    method: "DELETE",
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
  deleteGoal,
};
