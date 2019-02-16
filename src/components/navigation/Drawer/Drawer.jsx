import React, { Component } from "react";
import classes from "./Drawer.css";
import Backdrop from "../../ui/Backdrop/Backdrop";

const links = [1, 2, 3];

class Drawer extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a href="/">Link {link}</a>
        </li>
      );
    });
  }

  render() {
    const cls = [classes.drawer];

    if (!this.props.isOpen) {
      cls.push(classes.close);
    }
    return (
      <React.Fragment>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </React.Fragment>
    );
  }
}

export default Drawer;
