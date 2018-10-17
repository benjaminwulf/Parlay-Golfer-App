import React from "react";
import { Component } from "react";
import { Nav, Button } from 'react-bootstrap';
import Holes from "../API/Holes.json";

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: Holes.name,
            par: Holes.par,
            yardage: Holes.white
        }
    };

displayHoles = () => {
    const Holes = 
    this.state.Holes.filter(Hole
    => Hole.name !== 10 );
    this.setState({ hole });
};

render() {
    return (
<Nav className="navbar fixed-bottom bg-light">
<div className="col-xs-4">
    <Button type="button" className="btn btn-primary">
        <i className="fas fa-chevron-circle-left"></i>
    </Button>
</div>
<div className="col-xs-4">
{this.state.Holes.map(Holes => (
    <Holes
        name={Holes.name}
        par={Holes.par}
        yardage={Holes.white}
    />
))};

</div>
<div className="col-xs-4">
<Button type="button" className="btn btn-primary">
    <i className="fas fa-chevron-circle-right"></i>
</Button>
</div>
</Nav>
    );
  }
};

export default Footer;