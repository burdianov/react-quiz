import React, { Component } from "react";
import classes from "./Quiz.css";
import ActiveQuiz from "../../components/activeQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    quiz: []
  };

  render() {
    return (
      <div className={classes.quiz}>
        <div className={classes.quizWrapper}>
          <h1>Quiz</h1>
          <ActiveQuiz />
        </div>
      </div>
    );
  }
}

export default Quiz;
