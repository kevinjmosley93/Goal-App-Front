const store = require("../store");

const goalCreatedPass = () => {
  $("#goal-message").text("Goal Created! Click anywhere to close!");
  $("#goal-form").trigger("reset");
};
const goalUpdatePass = (res) => {
  store.goal = res.goal._id;
  console.log("ui data:", store.goal);
  $("#update-goal-message").text("Goal Created! Click anywhere to close!");
  $("#-update-goal-form").trigger("reset");
};

const allGoalSuccess = (res) => {
  $("#success-goal-message").text("All your goals are below!");
  // $(".change-password-model-btn").hide();
  const allGoals = res.goal;
  allGoals.forEach((goal) => {
    const selector = "#goals";
    console.log("each goal:", goal);
    $(selector).append(`
<div class="row ">
    <div class="col">
      <div class="card bg-dark container bd w-50 shadow-lg">
        <div class="card-body text-light">
          <small class='text-secondary shadow-lg'>Goal: ${goal._id}</small>
          <h3 class="card-title text-center">"${goal.title}"</h3>
          <small class='text-secondary shadow-lg'>Date: ${goal.date}</small>
          <h6 class="pt-2 card-text">Goal: ${goal.goalText}</h6>
          <small class='text-secondary shadow-lg'>Complete By: ${goal.finishBy}</small>
          <br>
          <input id='update-goal-model-btn' class="btn btn-success  shadow-lg float-left" type="submit" value="UPDATE GOAL">
          <input id='delete-goal-model-btn' class="btn btn-success  shadow-lg float-right" type="submit" value="DELETE GOAL">
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
  goalUpdatePass,
  allGoalFailure,
};
