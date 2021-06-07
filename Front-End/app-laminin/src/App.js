//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { useState } from 'react';
import {  Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Consultor from './componet/consultor';
import Login from './componet/login';
import NavHeder from './componet/navbar'
import Dasboard from './componet/dashboard'
import ListarPreco from './componet/listarPrecos'
import RegistarProduto from './componet/registarProduto'


function App() {
  const [token, setToken] = useState();
  return (
    <Router>
            <Switch >
            <Container > 
                <Route exact path='/' component={Login} />
                <Route path="/login" exact component={Login} />
                <Route path="/registar/consultor" exact component={Consultor} />
                
              
                <Route path="/home" exact component={Dasboard} />
                <Route path="/listar-precos" exact component={ListarPreco} />
                <Route path="/registar-produto" exact component={RegistarProduto} />
             </Container>
                
            </Switch>
        </Router>
   
 
  
  ); 
}

export default App;
