import React from "react";
import classes from "./ActiveQuiz.css";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
  <div className={classes.activeQuiz}>
    <p className={classes.question}>
      <span>
        <strong>{props.questionNumber}.</strong>&nbsp; {props.question}
      </span>

      <small>
        {props.questionNumber} of {props.quizLength}
      </small>
    </p>
    <AnswersList answers={props.answers} onAnswerClick={props.onAnswerClick} />
  </div>
);

export default ActiveQuiz;
