import React, { Component } from "react";
import classes from "./QuizList.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

class QuizList extends Component {
  state = {};
  renderQuizes() {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={"/quiz/" + quiz}>Test {quiz}</NavLink>
        </li>
      );
    });
  }

  componentDidMount() {
    axios
      .get("https://react-quiz-ce6a7.firebaseio.com/quiz.json")
      .then(response => {
        console.log(response);
      });
  }

  render() {
    return (
      <div className={classes.quizList}>
        <div>
          <h1>Quiz List</h1>

          <ul>{this.renderQuizes()}</ul>
        </div>
      </div>
    );
  }
}

export default QuizList;
