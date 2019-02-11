import React from "react";
import classes from "./ActiveQuiz.css";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
  <div className={classes.activeQuiz}>
    <p className={classes.question}>
      <span>
        <strong>2.</strong>&nbsp; How are you?
      </span>

      <small>4 of 12</small>
    </p>
    <AnswersList answers={props.answers} />
  </div>
);

export default ActiveQuiz;
