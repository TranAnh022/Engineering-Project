import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
const logo = require("../assets/logo.png");

const NavLogo = () => {
  return (
    <div className="container fluid">
      <Navbar bg="lighht" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="100%"
              height="50vh"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavLogo;
