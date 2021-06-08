import React, { Component, useState } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavHeder from "../componet/navbar";
import Logo from "../img/lamini.png";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
    };
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

  onSubmit(e) {
    e.preventDefault();
    const dados = {
      email: this.state.email,
      password: this.state.password,
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
        alert("Dados errados");
      });

    this.setState({
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <Container>
        <NavHeder />
        <Row style={{ marginTop: "100px" }}>
          <Col sm={8}>
            <img src={Logo} alt="logos" />
          </Col>

          <Col sm={4}>
            <h3>Login User</h3>
            <Card bg="">
              <form onSubmit={this.onSubmit}>
                <p></p>
                <div className="form-group">
                  <label>Email: </label>
                  <input
                    type="email"
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
                <Card.Body>
                  <Card.Text></Card.Text>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Registar"
                      className="btn btn-primary"
                    />
                  </div>
                </Card.Body>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
