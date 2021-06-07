import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import {  Navbar, Nav, Form, FormControl, Button, NavDropdown,Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Centro from './centro'




const Dasboard = () => {
  
    return (
 
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/home"><strong>LAMININ</strong> </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/registar-produto">Registar Produto</Nav.Link>
      <Nav.Link href="/listar-precos">Listar Preços</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Pesquisa</Button>
    </Form>
    <Nav>
      <NavDropdown title="Perfil" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/login">Sair</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar>
  
      
    );
  };
  
  export default Dasboard ;