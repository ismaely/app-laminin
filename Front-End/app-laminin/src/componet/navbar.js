import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavHeder = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <h2></h2>
      </Navbar.Brand>
      <Container></Container>
      <Navbar.Brand href="/registar/consultor">Regista-se</Navbar.Brand>
      <Navbar.Brand href="/login">Login</Navbar.Brand>
    </Navbar>
  );
};

export default NavHeder;
