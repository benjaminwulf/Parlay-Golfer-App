import React from "react";

const MapCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt="Hole view" src={props.photo} />
    </div>
    <div className="content">
        <div>  
            hole name {props.name}
        </div>
        <div>
            yardage {props.yardage}
        </div>
        <div>
            par {props.par}
        </div>
    </div>
  </div>
);

export default MapCard; 
