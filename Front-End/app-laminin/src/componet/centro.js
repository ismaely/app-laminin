import React, { Component } from "react";
import { BrowserRouter as Route } from "react-router-dom";
import {  Navbar, Card,Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../img/lamini.png';




export default class Centro extends Component {
      
    constructor(props) {
        super(props);
      }

    render() {
        return (
           
          <Container>
            <Row style={{  marginTop: '100px' }}>
                <Col sm={8} >
                <img src={Logo} alt="logos"/>
                </Col>

                <Col sm={4} >
            
                <Card bg="" >
                    </Card>
                 </Col>
        
            </Row>
  
          
          </Container>
 );
}
}
