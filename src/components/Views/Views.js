import React, { Component } from "react";
import MapCard from "../MapCard/MapCard";
import Wrapper from "../Wrapper/Wrapper"
import holes from "../../API/holes.json"


class Views extends Component {
    state = {
      holes
    };

    changeMap = id => {
      const holes = this.state.holes.filter(hole => hole.id !== id);

      this.setState({ holes })
    }

    
    render() {
        return (
          <Wrapper>
          {this.state.holes.map(hole => (
              <MapCard
                id={hole.id}
                key={hole.id}
                photo={hole.photo}
                name={hole.name}
                par={hole.par}
                yardage={hole.yardage}
              />
            ))}
           </Wrapper>
        )
    }
      
};

export default Views;