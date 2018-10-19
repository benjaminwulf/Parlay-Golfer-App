import React from "react";

const Footer = props => (
  <div className="card-body">
    <p className="card-text"> {props.count}</p>
    <button className="btn btn-danger" onClick={props.handleDecrement}>
    <i class="fas fa-angle-double-left"></i>
    Last Hole
    </button>
    <button className="btn btn-primary" onClick={props.handleIncrement}>
    Next Hole
    <i class="fas fa-angle-double-right"></i>
    </button>{" "}
  </div>
);

export default Footer;
