import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Redirect } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavHeder from "../componet/navbar";

export default class Consultor extends Component {
  constructor(props) {
    super(props);

    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nome: "",
      email: "",
      password: "",
    };
  }

  onChangeNome(e) {
    this.setState({
      nome: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  // enviar os dados
  onSubmit(e) {
    e.preventDefault();

    const dados = {
      nome: this.state.nome,
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost:5000/registar-consultor", dados)
      .then((res) => {
        if (res.data != null) {
          alert("registro realizado com sucesso");
          this.props.history.push("/home");
        }
      });

    this.setState({
      nome: "",
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <Container>
        <NavHeder />
        <Row style={{ marginTop: "100px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <div style={{ marginTop: 30 }}>
              <h3>Registar Consultor</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Nome: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.nome}
                    onChange={this.onChangeNome}
                  />
                </div>
                <div className="form-group">
                  <label>Email: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                  />
                </div>
                <div className="form-group">
                  <label>password: </label>
                  <input
                    type="password"
                    className="form-control"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Registar"
                    className="btn btn-primary"
                  />
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
