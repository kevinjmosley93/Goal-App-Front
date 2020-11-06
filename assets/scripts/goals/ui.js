const store = require("../store");

const goalCreatedPass = () => {
  $("#goal-message").text("Goal Created! Click anywhere to close!");
  $("#goal-form").trigger("reset");
};

const allGoalSuccess = (res) => {
  $("#success-goal-message").text("All your goals are below!");
  // $(".change-password-model-btn").hide();
  const allGoals = res.goal;
  allGoals.forEach((goal) => {
    console.log("ui goal id:", goal._id);
  });

  allGoals.forEach((goal) => {
    const selector = "#goals";
    console.log("each goal:", goal);
    $(selector).append(`
<div class="row ">
    <div class="col">
      <div class="card bg-dark container bd w-50 shadow-lg">
        <div class="card-body text-light">
          <h3 class="card-title text-center">"${goal.title}"</h3>
          <small class='text-secondary shadow-lg'>Date: ${goal.date}</small>
          <h6 class="pt-3 pb-3 card-text">Goal: ${goal.goalText}</h6>
          <h6 class="pt-3 pb-3 card-text">Obstacles: ${goal.obstacles}</h6>
          <small class='text-secondary shadow-lg'>Complete By: ${goal.finishBy}</small>
          <br>
            <button type="button" class="btn btn-success shadow-lg float-left" data-toggle="modal" data-target="#updateModal">
    UPDATE GOAL
  </button>
          <input id='delete-goal-model-btn' class="btn btn-success  shadow-lg float-right" type="submit" value="DELETE GOAL">
        </div>
      </div>
    </div>
  </div>
  <br>
    `);
    store.goal = goal;
    const newGoalId = goal._id;

    console.log("all goals data", newGoalId);
  });

  // $(selector).empty();
  // // Loop each doctor object and add it to result area
  // $.each(res.goal, (index, goals) => {
  //   appendGoal(selector, goals);
  // });
};

const goalUpdatePass = (res) => {
  const goal = store.goal;
  console.log("ui data:", goal);
  $("#update-goal-message").text("Goal Updated! Click anywhere to close!");
  $("#update-goal-form").trigger("reset");
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
