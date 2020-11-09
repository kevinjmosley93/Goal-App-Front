const store = require("../store");

const goalCreatedPass = () => {
  $("#goal-message").text("Goal Created! Click anywhere to close!");
  $("#goal-form").trigger("reset");
  $("#success-goal-message").text("");
};

const allGoalSuccess = (res) => {
  $("#success-goal-message").text("All your goals are below!");
  $("#goal-message").text("");
  //set all of the goals to a variable
  const allGoals = res.goal;
  //loop through all goals and append each one in a card
  allGoals.forEach((goal) => {
    $("#goals").append(`
<div class="row ">
    <div class="col">
      <div class="card bg-dark container bd w-50 shadow-lg">
        <div class="card-body text-light">
          <h3 class="card-title text-center">"${goal.title}"</h3>
          <small class='text-secondary shadow-lg'>Date: ${goal.date}</small>
          <h6 class="pt-3 pb-3 card-text">Goal: ${goal.goalText}</h6>
          <h6 class="pt-3 pb-3 card-text">Obstacles: ${goal.obstacles}</h6>
          <small class='text-secondary shadow-lg'>Complete By: ${goal.finishBy}</small>
          <small class='text-secondary float-right shadow-lg'>Goal ID: ${goal._id}</small>
          <br>
          <button type="button" class="btn btn-success shadow-lg float-left" data-toggle="modal" data-target="#updateModal">
          UPDATE GOAL
          </button>
          <button type="button" class="btn float-right shadow-lg btn-success" data-toggle="modal"     data-target="#deleteModal">
          DELETE
          </button>
        </div>
      </div>
    </div>
  </div>
  <br>
    `);
    store.goal = goal;
  });
  $("#update-goal-form").trigger("reset");
  $("#update-goal-message").text("");
};

const goalUpdatePass = () => {
  const goal = store.goal;

  $("#update-goal-message").text(
    "Goal Updated! Click anywhere to check your goals!"
  );
  $("#update-goal-form").trigger("reset");
  $("#success-goal-message").text("");
  $("#goals").text("");
};
const deleteGoalPass = (res) => {
  store.goal = {};
  res = store.goal;
  $(".delete-message").text(
    "Goal deleted successfully! Make sure you set another one soon!"
  );
  $("#delete-goal-model-btn").trigger("reset");
  $("#success-goal-message").text("");
  $("#goals").text("");
};

const allGoalFailure = (res) => {
  $("#success-goal-message").text("Error!! Please Try Again!");
};
module.exports = {
  goalCreatedPass,
  allGoalSuccess,
  goalUpdatePass,
  deleteGoalPass,
  allGoalFailure,
};
