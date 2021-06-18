import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Redirect } from "react-router-dom";
import { Container, Row, Col, Alert, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavHeder from "../componet/navbar";
import { useFormik, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const Consultor = () => {
  const formik = useFormik({

    initialValues: {
      nome: '',
      email: '',
      password: '',

    },

    validationSchema: Yup.object({

      nome: Yup.string()
        .min(3, 'O nome é curto...')
        .required('O Campo é obrigatorio'),

      email: Yup.string().email('Email invalido').required('campo obrigatorio'),

      password: Yup.string()
        .min(4, 'A senha é muito curta...!')
        .required('campo obrigatorio'),


    }),

    onSubmit: values => {

      axios
        .post("http://localhost:5000/registar-consultor", values)
        .then((res) => {
          if (res.data != null) {
            alert("registro realizado com sucesso");
            window.location.href = '/home'
            //this.props.history.push("/home");
          }
        });

      this.initialValues({
        nome: "",
        email: "",
        password: "",
      });
    },

  });




  return (

    <Container>
      <NavHeder />
      <Row style={{ marginTop: "100px" }}>
        <Col md={{ span: 6, offset: 3 }}>
          <div style={{ marginTop: 30 }}>
            <h3>Registar Consultor</h3>
            <form onSubmit={formik.handleSubmit}>


              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Nome: </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="nome"
                  name="nome"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nome}
                />
              </InputGroup>
              {formik.touched.nome && formik.errors.nome ? (
                <div>
                  <Alert variant="danger">
                    {formik.errors.nome}
                  </Alert>
                </div>
              ) : null}
              <br />



              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Email:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email} />
              </InputGroup>
              {formik.touched.email && formik.errors.email ? (
                <div>
                  <Alert variant="danger">
                    {formik.errors.email}
                  </Alert>
                </div>
              ) : null}

              <br />
              <InputGroup className="mb-3">
                <InputGroup.Prepend>

                  <InputGroup.Text>Password:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="password"
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password} />
              </InputGroup>
              {formik.touched.password && formik.errors.password ? (
                <div>
                  <Alert variant="danger">
                    {formik.errors.password}
                  </Alert>
                </div>
              ) : null}


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

export default Consultor;