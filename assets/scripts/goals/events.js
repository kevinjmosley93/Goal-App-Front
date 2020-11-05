const store = require("../store");
const getFormInfo = require("./../../../lib/get-form-fields");
const api = require("./api");
const ui = require("./ui");

const createGoalClick = (event) => {
  event.preventDefault();
  const form = event.target;
  const data = getFormInfo(form);
  console.log("event data is", form);

  api.createGoal(data).then(ui.goalCreatedPass).catch(ui.allGoalFailure);
};
const allGoalsClick = (event) => {
  event.preventDefault();
  const form = event.target;
  const data = getFormInfo(form);
  api.getAllGoals().then(ui.allGoalSuccess).catch(ui.allGoalFailure);
};

module.exports = {
  createGoalClick,
  allGoalsClick,
};
