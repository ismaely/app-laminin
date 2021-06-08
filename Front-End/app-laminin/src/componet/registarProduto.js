import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavHeder from "../componet/navbar";
import Dasboard from "../componet/dashboard";

export default class RegistarProduto extends Component {
  constructor(props) {
    super(props);

    this.onChangeMercado = this.onChangeMercado.bind(this);
    this.onChangeNome_produto = this.onChangeNome_produto.bind(this);
    this.onChangeData_insercao = this.onChangeData_insercao.bind(this);
    this.onChangePreco_produto = this.onChangePreco_produto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      mercado: "",
      nome_produto: "",
      data_insercao: "",
      preco_produto: "",
    };
  }

  onChangeMercado(e) {
    this.setState({
      mercado: e.target.value,
    });
  }

  onChangeNome_produto(e) {
    this.setState({
      nome_produto: e.target.value,
    });
  }

  onChangeData_insercao(e) {
    this.setState({
      data_insercao: e.target.value,
    });
  }

  onChangePreco_produto(e) {
    this.setState({
      preco_produto: e.target.value,
    });
  }

  // enviar os dados
  onSubmit(e) {
    e.preventDefault();

    const dados = {
      mercado: this.state.mercado,
      nome_produto: this.state.nome_produto,
      data_insercao: this.state.data_insercao,
      preco_produto: this.state.preco_produto,
    };

    axios.post("http://localhost:5000/registar-produto", dados).then((res) => {
      if (res.data != null) {
        alert("registro realizado com sucesso");
      }
    });

    this.setState({
      mercado: "",
      nome_produto: "",
      data_insercao: "",
      preco_produto: "",
    });
  }

  render() {
    return (
      <Container>
        <Dasboard />
        <Row style={{ marginTop: "30px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <div style={{ marginTop: 30 }}>
              <h3>Registar historico do Produto</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Nome do Mercado: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.mercado}
                    onChange={this.onChangeMercado}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Nome do Produto: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.nome_produto}
                    onChange={this.onChangeNome_produto}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Data de Entrada: </label>
                  <input
                    type="date"
                    className="form-control"
                    value={this.state.data_insercao}
                    onChange={this.onChangeData_insercao}
                  />
                </div>
                <div className="form-group">
                  <label>Preço do Produto: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.preco_produto}
                    onChange={this.onChangePreco_produto}
                    required
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
