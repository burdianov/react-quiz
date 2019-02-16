import React, { Component } from "react";
import classes from "./QuizList.css";
import { NavLink } from "react-router-dom";

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
