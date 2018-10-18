import React from "react";
import { Nav, Button } from 'react-bootstrap';
import Holes from "../API/Holes.json";

const Footer = () => (

<Nav className="navbar fixed-bottom bg-light">
<div className="col-xs-4">
    <Button type="button" className="btn btn-primary">
        <i className="fas fa-chevron-circle-left"></i>
    </Button>
</div>
<div className="col-xs-4">
</div>
<div className="col-xs-4">
<Button type="button" className="btn btn-primary">
    <i className="fas fa-chevron-circle-right"></i>
</Button>
</div>
</Nav>
    );

export default Footer;