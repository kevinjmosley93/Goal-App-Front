const store = require("../store");
const getFormInfo = require("./../../../lib/get-form-fields");
const api = require("./api");
const ui = require("./ui");

const createGoalClick = (event) => {
  event.preventDefault();
  const form = event.target;
  const data = getFormInfo(form);
  api.createGoal(data).then(ui.goalCreatedPass).catch(ui.allGoalFailure);
};
const allGoalsClick = (event) => {
  event.preventDefault();
  const form = event.target;
  const data = getFormInfo(form);
  api.getAllGoals(data).then(ui.allGoalSuccess).catch(ui.allGoalFailure);
};

const updateGoalClick = (event) => {
  event.preventDefault();
  const form = event.target;
  const data = getFormInfo(form);
  api.updateGoal(data).then(ui.goalUpdatePass).catch(ui.allGoalFailure);
};
const deleteGoalClick = (event) => {
  event.preventDefault();
  const form = event.target;
  const data = getFormInfo(form);
  api.deleteGoal(data).then(ui.deleteGoalPass).catch(ui.allGoalFailure);
};

module.exports = {
  createGoalClick,
  allGoalsClick,
  updateGoalClick,
  deleteGoalClick,
};
