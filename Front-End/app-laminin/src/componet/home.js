import React, { Component, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavHeder from "../componet/navbar";
import Logo from "../img/lamini.png";
import Dasboard from './dashboard'

export default class Home extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Container>
                <Dasboard />

                <Row style={{ marginTop: "180px" }}>
                    <Col md={{ span: 5, offset: 4 }}>
                        <img src={Logo} alt="logos" />
                        <br />
                        <p>
                            <br />
                            <strong> SISTEMA HISTORICO DE PREÇOS DE PRODUTOS
                            </strong>
                        </p>

                    </Col>
                </Row>
            </Container>
        );
    }
}
