import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Dasboard extends Component {
  constructor(props) {
    super(props);
    this.onPesquisa = this.onPesquisa.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      pesquisa: "",
    };
  }
  onPesquisa(e) {
    this.setState({
      pesquisa: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const dados = {
      pesquisa: this.state.pesquisa,
    };
    fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify(dados),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          this.props.history.push("/home");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Dados não localizados");
      });

    this.setState({
      pesquisa: "",
    });
  }
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/home">
          <strong>LAMININ</strong>{" "}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/registar-produto">Registar Produto</Nav.Link>
          <Nav.Link href="/listar-precos">Listar Preços</Nav.Link>
        </Nav>
        <Form inline>
          <input
            type="text"
            placeholder="Search"
            className="form-control"
            value={this.state.pesquisa}
            onChange={this.onPesquisa}
          />
          <input
            type="submit"
            value="Pesquisar"
            ariant="outline-light"
            className="btn btn-primary"
          />
        </Form>
        <Nav>
          <NavDropdown title="Perfil" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/login">Sair</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}
