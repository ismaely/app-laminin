//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link, withRouter } from "react-router-dom";
import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Consultor from './componet/consultor';
import Login from './componet/login';
import NavHeder from './componet/navbar'

import ListarPreco from './componet/listarPrecos'
import RegistarProduto from './componet/registarProduto'
import Home from './componet/home'
import Pesquisa from './componet/pesquisa'
import Dasboard from "./componet/dashboard";

class App extends React.Component {
  state = {
    searchText: ""
  };


  handleRoute = route => () => {

    this.props.history.push({ pathname: route });
  };


  render() {
    return (
      <BrowserRouter>
        <Switch >
          <Container >
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/registar/consultor" component={Consultor} />


            <Route path="/home" exact component={Home} />
            <Route exact path="/listar-precos" component={ListarPreco} />
            <Route exact path="/registar-produto" component={RegistarProduto} />
            <Route exact path="/pesquisa" component={Pesquisa} />
          </Container>

        </Switch>
      </BrowserRouter>

    );
  }
}
export default withRouter(App);
