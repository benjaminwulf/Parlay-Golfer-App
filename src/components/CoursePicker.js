import React from "react";
import "../styles/Header.css";
import { Navbar, NavItem, Nav, FormGroup, FormControl, Button } from 'react-bootstrap';

const CoursePicker = () => (

<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <h1>Parlay <span role="img" aria-label="Golf green">⛳️</span> Golfer</h1>
    </Navbar.Brand>
      <FormGroup>
        <FormControl type="text" placeholder="Search Golf Course"  />
        <Button block type="submit">Submit</Button>
      </FormGroup>{' '}
    </Navbar.Header>
</Navbar>
);

export default CoursePicker;
