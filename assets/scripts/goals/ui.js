const store = require("../store");

const goalCreatedPass = () => {
  $("#goal-message").text("Goal Created!");
  $("#goal-form").hide();
  $("#goal-form").trigger("reset");
};

const allGoalSuccess = (res) => {
  const allGoals = res.goal;
  allGoals.forEach((goal) => {
    const selector = "#goals";
    console.log("each goals:", goal);
    $(selector).append(`
<div class="card container w-25" style="width: 18rem;">
  <h1 class='border border-success '>Owner: ${goal.owner.email}</h1>
  <ul class="list-group list-group-flush">
    <li class='list-group-item'>Title: ${goal.title}</li>
    <li class='list-group-item'>Date: ${goal.date}</li>
    <li class='list-group-item'>Complete By: ${goal.finishBy}</li>
    <li class='list-group-item'>Goal: ${goal.goalText}</li>
  </ul>
</div>
    `);
  });

  console.log("all goals data", allGoals);
  // $(selector).empty();
  // // Loop each doctor object and add it to result area
  // $.each(res.goal, (index, goals) => {
  //   appendGoal(selector, goals);
  // });
};

const allGoalFailure = (res) => {
  $("#goal-message").text("Error!! Please Try Again!");
};
module.exports = {
  goalCreatedPass,
  allGoalSuccess,
  allGoalFailure,
};
