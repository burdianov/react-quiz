import React from "react";
import classes from "./Loader.css";

const Loader = props => (
  <div className={classes.center}>
    <div className={classes.loader}>
      <div />
      <div />
    </div>
  </div>
);

export default Loader;
