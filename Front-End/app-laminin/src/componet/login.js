import React, { Component, useState } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavHeder from "../componet/navbar";
import Logo from "../img/lamini.png";
import { useFormik, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

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

        <Row style={{ marginTop: "80px" }}>
          <Col md={{ span: 5, offset: 4 }}>
            <img src={Logo} alt="logos" />
          </Col>
        </Row>

        <Row style={{ marginTop: "30px" }}>

          <Col md={{ span: 5, offset: 4 }}>
            <h3> Login</h3>
            <Card bg="">
              <form onSubmit={this.onSubmit}>
                <p></p>
                <div className="form-group">
                  <label>Email: </label>
                  <input
                    required
                    type="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                  />
                </div>
                <div className="form-group">
                  <label>password: </label>
                  <input
                    required
                    type="password"
                    className="form-control"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                  />
                </div>
                <Card.Body>

                  <Row >
                    <Col md={12}>
                      <div className="form-group">
                        <input
                          type="submit"
                          value="Login"
                          className="btn btn-primary"
                        />
                      </div>
                    </Col>
                  </Row>

                </Card.Body>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
