import React from "react";

const Footer = props => (
  <div className="card-body">
    <button className="btn btn-danger col-xs-4" onClick={props.handleDecrement}>
    <i class="fas fa-angle-double-left"></i>
    Last Hole
    </button>
    <h4 className="card-text col-xs-4"> {props.count}</h4>

    <button className="btn btn-primary col-xs-4" onClick={props.handleIncrement}>
    Next Hole
    <i class="fas fa-angle-double-right"></i>
    </button>{" "}
  </div>
);

export default Footer;
