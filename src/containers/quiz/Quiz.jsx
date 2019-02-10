import React, { Component } from "react";
import classes from "./Quiz.css";

class Quiz extends Component {
  state = {
    quiz: []
  };

  render() {
    return (
      <div className={classes.quiz}>
        <h1>Quiz</h1>
      </div>
    );
  }
}

export default Quiz;
