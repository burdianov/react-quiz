import React, { Component } from "react";
import classes from "./Auth.css";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import is from "is_js";

class Auth extends Component {
  state = {
    formControls: {
      email: {
        value: "",
        type: "email",
        label: "Email",
        errorMessage: "Enter a valid email",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: "",
        type: "password",
        label: "Password",
        errorMessage: "Enter the correct password",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  };

  loginHandler = () => {};

  registerHandler = () => {};

  submitHandler = event => {
    event.preventDefault();
  };

  validateControl(value, validation) {
    if (!validation) {
      return true;
    }
    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (validation.email) {
      isValid = is.email(value) && isValid;
    }
    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }

    return isValid;
  }

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formControls[controlName] = control;

    this.setState({
      formControls
    });
  };

  renderInputs() {
    const inputs = Object.keys(this.state.formControls).map(
      (controlName, index) => {
        const control = this.state.formControls[controlName];
        return (
          <Input
            key={controlName + index}
            type={control.type}
            value={control.value}
            valid={control.valid}
            touched={control.touched}
            label={control.label}
            shouldValidate={!!control.validation}
            errorMessage={control.errorMessage}
            onChange={event => {
              this.onChangeHandler(event, controlName);
            }}
          />
        );
      }
    );
    return inputs;
  }

  render() {
    return (
      <div className={classes.auth}>
        <div>
          <h1>Authorization</h1>
          <form onSubmit={this.submitHandler} className={classes.authForm}>
            {this.renderInputs()}

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
