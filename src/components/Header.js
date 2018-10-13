import React from "react";
import "../styles/Header.css";
import { Navbar, NavItem, Nav, FormGroup, FormControl, Button } from 'react-bootstrap';

const Header = () => (

<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <h1>Parlay <span role="img" aria-label="Golf green">⛳️</span> Golfer</h1>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
  <Nav bsStyle="pills" stacked activeKey={1}>
  <Navbar.Form pullLeft>
      <FormGroup>
        <FormControl type="text" placeholder="Search Golf Course"  />
        <Button block type="submit">Submit</Button>
      </FormGroup>{' '}
    </Navbar.Form>
  <NavItem eventKey={1} href="/select-hole">
      Select Hole
    </NavItem>
    <NavItem eventKey={2}>
      Profile
    </NavItem>
    <NavItem eventKey={3}>
      Logout
    </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>

);

export default Header;
