import React, { Component } from "react";
import classes from "./Auth.css";
import Button from "../../components/ui/Button/Button";

class Auth extends Component {
  state = {};
  loginHandler = () => {};
  registerHandler = () => {};
  submitHandler = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div className={classes.auth}>
        <div>
          <h1>Authorization</h1>
          <form onSubmit={this.submitHandler} className={classes.authForm}>
            <input type="text" />
            <input type="text" />

            <Button type="success" onClick={this.loginHandler}>
              Log in
            </Button>
            <Button type="primary" onClick={this.signupHandler}>
              Sign up
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
