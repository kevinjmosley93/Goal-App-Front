const store = require("../store");

const goalCreatedPass = () => {
  $("#goal-message").text("Goal Created! Click anywhere to close!");
  $("#goal-form").trigger("reset");
};

const allGoalSuccess = (res) => {
  $("#success-goal-message").text("All your goals are below!");
  $("#change-password-form").hide();
  const allGoals = res.goal;
  allGoals.forEach((goal) => {
    const selector = "#goals";
    console.log("each goal:", goal);
    $(selector).append(`
<div class="row ">
    <div class="col">
      <div class="card bg-dark container bd w-50">
        <div class="card-body text-light">
          <h3 class="card-title">Title: "${goal.title}"</h3>
          <small>Date: ${goal.date}</small>
          <h6 class="pt-2 card-text">Goal: ${goal.goalText}</h6>
          <small>Complete By: ${goal.finishBy}</small>
          <br>
          <input class="btn btn-success  shadow-lg float-left" type="submit" value="UPDATE GOAL">
          <input class="btn btn-success  shadow-lg float-right" type="submit" value="DELETE GOAL">
        </div>
      </div>
    </div>
  </div>
  <br>
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
  $("#success-goal-message").text("Error!! Please Try Again!");
};
module.exports = {
  goalCreatedPass,
  allGoalSuccess,
  allGoalFailure,
};
