import React from "react";
import classes from "./ActiveQuiz.css";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
  <div className={classes.activeQuiz}>
    <p className={classes.question}>
      <span>
        <strong>2.</strong>&nbsp; {props.question}
      </span>

      <small>4 of 12</small>
    </p>
    <AnswersList answers={props.answers} onAnswerClick={props.onAnswerClick} />
  </div>
);

export default ActiveQuiz;
