import React from "react"; 
import "../styles/SubHeader.css";
import { ButtonToolbar, Button } from 'react-bootstrap';

const SubHeader = () => (

<div>
<ButtonToolbar>
        <Button bsSize="large"><img src="https://s3.amazonaws.com/parlay-golfer/img/icons/golf.svg" alt="Golf Map" height="60px" width="60px" />Map</Button>
        <Button bsSize="large"><img src="https://s3.amazonaws.com/parlay-golfer/img/icons/score.svg" alt="Score card" height="60px" width="60px" />Score</Button>
        <Button bsSize="large"><img src="https://s3.amazonaws.com/parlay-golfer/img/icons/drone.svg" alt="drone fly bye" height="60px" width="60px" />Fly-over</Button>
</ButtonToolbar>
 </div>

);

export default SubHeader;