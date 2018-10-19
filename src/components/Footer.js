import React from "react";

const Footer = props => (
  <div className="card-body">
    <p className="card-text">Click Count: {props.count}</p>
    <button className="btn btn-danger" onClick={props.handleDecrement}>
      Last Hole
    </button>
    <button className="btn btn-primary" onClick={props.handleIncrement}>
      Next Hole
    </button>{" "}
  </div>
);

export default Footer;
