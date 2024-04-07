import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap"; // react-router-bootstrap for integration
import './NavBarr.css';

export default function NavBarr() {
  return (
    <Navbar expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Counter</Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Table">
            <Nav.Link>Table</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Chart">
            <Nav.Link>Chart</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/register">
            <Nav.Link>Register</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}
