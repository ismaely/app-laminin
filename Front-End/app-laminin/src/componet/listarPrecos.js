import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Container, Row, Col, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavHeder from "../componet/navbar";
import Dasboard from "../componet/dashboard";
import moment from "moment";

const Lista = (props) => {
  <tr>
    <td>{props.dados._id}</td>
    <td>{props.dados.mercado}</td>
    <td>{props.dados.nome_produto}</td>
    <td>{props.dados.data_insercao}</td>
    <td>{props.dados.preco_produto} Kz</td>
  </tr>;
};
export default class ListarPreco extends Component {
  constructor(props) {
    super(props);
    this.state = { dados: [], isLoading: true };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("http://localhost:5000/listar-produto")
      .then((response) => response.json())
      .then((data) => this.setState({ dados: data, isLoading: false }));
  }

  render() {
    const { dados, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading.....</p>;
    }
    const chamarList = dados.map((items) => {
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
