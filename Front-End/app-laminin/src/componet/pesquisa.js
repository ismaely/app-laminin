import React, { Component, useState } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Container, Row, Col, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavHeder from "../componet/navbar";
import Dasboard from "../componet/dashboard";
import moment from "moment";




export default class Pesquisa extends Component {

    state = {
        isLoading: true,
        searchText: "",
        resultado: []
    };


    handleSearch = () => {
        let searchText = window.location.search.split('=');
        console.log(searchText[1]);
        fetch("http://localhost:5000/pesquisa/" + searchText[1])

            .then((response) => response.json())
            .then((data) => this.setState({
                resultado: data,
                isLoading: false,
                searchText: searchText
            }));


    };

    componentDidMount() {
        this.handleSearch();
    }

    componentDidUpdate() {

        this.handleSearch();

    }



    render() {
        const { dados, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading.....</p>;
        }
        const chamarList = this.state.resultado.map((items) => {
            return (
                <tr>
                    <td> </td>
                    <td>{items.mercado}</td>
                    <td>{items.nome_produto}</td>
                    <td>{moment(items.data_insercao).format("DD/MM/YYYY")}</td>
                    <td>{items.preco_produto}Kz</td>
                </tr>
            );
        });

        return (
            <Container>
                <Dasboard />
                <Row style={{ marginTop: "50px" }}>
                    <Col>
                        Pesquisa de Dados
                        <Table responsive striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome do Mercado</th>
                                    <th>Nome do Produto</th>
                                    <th>Data de Entrada</th>
                                    <th>Preço do Produto</th>
                                </tr>
                            </thead>
                            {chamarList}
                            <tbody></tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }

}