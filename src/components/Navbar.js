import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';

const Bar = ({ next, last, schedule }) => (
  <div>
    <Navbar color="faded" light expand="md">
      <NavbarBrand href="/">SuperScheduler</NavbarBrand>
      <div className="inline-style">
        <span> <strong>{Object.keys(schedule[0][0])}-{Object.keys(schedule[6][0])}</strong> </span>
          <Button onClick={() => last()} className="previous">&laquo; Prev</Button>
          <Button onClick={() => next()} className="next">Next &raquo;</Button>
      </div>
      <NavbarToggler />
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
)

export default Bar;
