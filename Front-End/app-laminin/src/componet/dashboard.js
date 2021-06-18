import React, { Component } from "react";
import { Route, Switch, withRouter, BrowserRouter, useHistory } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
  Container
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ListarPreco from './listarPrecos'
import RegistarProduto from './registarProduto'
import Home from './home'
import Pesquisa from './pesquisa'

export default class Dasboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
    };
  }

  handleRoute = route => () => {

    this.props.history.push({ pathname: route });
  };

  handleSearchInput = event => {
    this.setState({
      searchText: event.target.value
    });
  };

  handleSearchSubmit = () => {

    if (this.state.searchText) {
      window.location.href = "/pesquisa?searchText=" + this.state.searchText;

    } else {
      alert("Digita um texto!");
    }
  };


  render() {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/home">
            <strong>LAMININ</strong>{" "}
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/registar-produto">Registar Produto</Nav.Link>
            <Nav.Link href="/listar-precos" >Listar Preços</Nav.Link>
          </Nav>
          <Form inline>
            <input
              type="text"
              placeholder="Pesquisa"
              className="form-control"
              value={this.state.searchText}
              onChange={this.handleSearchInput}
            />
            <Button
              onClick={this.handleSearchSubmit} variant="outline-light">
              Search
            </Button>
          </Form>
          <Nav>
            <NavDropdown title="Perfil" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/login">Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>


      </>

    );
  }
}
