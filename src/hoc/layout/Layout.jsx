import React, { Component } from "react";
import classes from "./Layout.css";
import MenuToggle from "../../components/navigation/MenuToggle/MenuToggle";

class Layout extends Component {
  state = {
    menu: false
  };

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    });
  };

  render() {
    return (
      <div className={classes.layout}>
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
