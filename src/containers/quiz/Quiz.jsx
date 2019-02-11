import React, { Component } from "react";
import classes from "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    quiz: [
      {
        question: "What color is the sky?",
        rightAnswerId: 2,
        answers: [
          { id: 1, text: "Black" },
          { id: 2, text: "Blue" },
          { id: 3, text: "Red" },
          { id: 4, text: "Green" }
        ]
      }
    ]
  };

  onAnswerClickHandler = answerId => {
    console.log("Answer Id: ", answerId);
  };

  render() {
    return (
      <div className={classes.quiz}>
        <div className={classes.quizWrapper}>
          <h1>Answer all the questions</h1>
          <ActiveQuiz
            question={this.state.quiz[0].question}
            answers={this.state.quiz[0].answers}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
