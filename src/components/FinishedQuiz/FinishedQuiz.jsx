import React from "react";
import classes from "./FinishedQuiz.css";

const FinishedQuiz = props => {
  return (
    <div className={classes.finishedQuiz}>
      <ul>
        <li>
          <strong>1. </strong>How are you?
          <i className={"fas fa-times " + classes.error} />
        </li>
        <li>
          <strong>2. </strong>How are you?
          <i className={"fas fa-check " + classes.success} />
        </li>
      </ul>
      <p>Correct Answers 4 out of 10</p>
      <div>
        <button>Repeat</button>
      </div>
    </div>
  );
};

export default FinishedQuiz;
