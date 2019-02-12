import React, { Component } from "react";
import classes from "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        id: 1,
        question: "What color is the sky?",
        rightAnswerId: 2,
        answers: [
          { id: 1, text: "Black" },
          { id: 2, text: "Blue" },
          { id: 3, text: "Red" },
          { id: 4, text: "Green" }
        ]
      },
      {
        id: 2,
        question: "In what year was Saint-Petersburg founded?",
        rightAnswerId: 3,
        answers: [
          { id: 1, text: "1700" },
          { id: 2, text: "1702" },
          { id: 3, text: "1703" },
          { id: 4, text: "1803" }
        ]
      }
    ]
  };

  onAnswerClickHandler = answerId => {
    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: { [answerId]: "success" }
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizedFinished()) {
          console.log("finished");
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          });
        }
        window.clearTimeout(timeout);
      }, 1000);
    } else {
      this.setState({
        answerState: { [answerId]: "error" }
      });
    }
  };

  isQuizedFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render() {
    return (
      <div className={classes.quiz}>
        <div className={classes.quizWrapper}>
          <h1>Answer all the questions</h1>
          <ActiveQuiz
            question={this.state.quiz[this.state.activeQuestion].question}
            answers={this.state.quiz[this.state.activeQuestion].answers}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            questionNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
