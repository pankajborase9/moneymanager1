import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import signup from './user/signup';




function Navd(){

    return(
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
  <Navbar.Brand href="#home">Money Manager</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="me-auto">
    </Nav> 
  <Router>
         <Route path="/signup" component={signup}/>
    <Nav>
        
         <Link to="./signup">Sign Up</Link>
    </Nav>
    
    </Router>
  </Navbar.Collapse>
  </Container>
</Navbar>

    )
}
export default Navd;