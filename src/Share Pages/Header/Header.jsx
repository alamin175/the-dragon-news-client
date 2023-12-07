import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div className="mt-3">
      <div className="text-center">
        <img src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favor</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")} </p>
      </div>
      <div className="d-flex">
        <Button className="btn-danger">Latest</Button>
        <Marquee className="text-danger">
          I can be a React component, multiple React components, or just some
          text... I can be a React component, multiple React components, or just
          some text...I can be a React component, multiple React components, or
          just some text...
        </Marquee>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary m-2">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link to={"/home"}>Home</Nav.Link>
              <Nav.Link to={"/about"}>About</Nav.Link>
              <Nav.Link to={"/career"}>Career</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Button className="btn-secondary">Login</Button>
      </Navbar>
    </div>
  );
};

export default Header;
