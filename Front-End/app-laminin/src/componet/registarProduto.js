import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col, Alert, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Dasboard from './dashboard'
import { useFormik, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const RegistarProduto = () => {
  const formik = useFormik({
    initialValues: {
      mercado: "",
      nome_produto: "",
      data_insercao: "",
      preco_produto: "",

    },

    state: {
      mercado: "",
      nome_produto: "",
      data_insercao: "",
      preco_produto: "",
    },
    validationSchema: Yup.object({

      mercado: Yup.string()
        .min(3, 'O nome é curto...')
        .required('O Campo é obrigatorio'),

      nome_produto: Yup.string()
        .min(2, 'O nome do produto é curto...')
        .required('O Campo é obrigatorio'),

      data_insercao: Yup.date()
        .required('A Data não é valida'),

      preco_produto: Yup.number()
        .min(2, 'Falta numero..!')
        .integer(10, 'Apenas numero')
        .required('campo obrigatorio'),


    }),

    onSubmit: values => {
      axios
        .post("http://localhost:5000/registar-produto", values)
        .then((res) => {
          if (res.data != null) {
            alert("registro realizado com sucesso");
            //this.props.history.push("/home");
            values.mercado = ""
            values.nome_produto = ""
            values.data_insercao = ""
            values.preco_produto = ""

          }
        });

    }


  });




  return (

    <Container>
      <Dasboard />
      <Row style={{ marginTop: "10px" }}>
        <Col md={{ span: 6, offset: 3 }}>
          <div style={{ marginTop: 30 }}>
            <h3>Registar historico do Produto</h3>
            <form onSubmit={formik.handleSubmit}>


              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Nome do Mercado: </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="mercado"
                  name="mercado"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mercado}
                />
              </InputGroup>
              {formik.touched.mercado && formik.errors.mercado ? (
                <div>
                  <Alert variant="danger">
                    {formik.errors.mercado}
                  </Alert>
                </div>
              ) : null}
              <br />

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Nome do Produto: </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="nome_produto"
                  name="nome_produto"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nome_produto}
                />
              </InputGroup>
              {formik.touched.nome_produto && formik.errors.nome_produto ? (
                <div>
                  <Alert variant="danger">
                    {formik.errors.nome_produto}
                  </Alert>
                </div>
              ) : null}
              <br />

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Data de Entrada: </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="data_insercao"
                  name="data_insercao"
                  type="date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.data_insercao}
                />
              </InputGroup>
              {formik.touched.data_insercao && formik.errors.data_insercao ? (
                <div>
                  <Alert variant="danger">
                    {formik.errors.data_insercao}
                  </Alert>
                </div>
              ) : null}
              <br />


              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Preço do Produto:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="preco_produto"
                  name="preco_produto"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.preco_produto}
                />
              </InputGroup>
              {formik.touched.preco_produto && formik.errors.preco_produto ? (
                <div>
                  <Alert variant="danger">
                    {formik.errors.preco_produto}
                  </Alert>
                </div>
              ) : null}
              <br />


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

};

export default RegistarProduto;