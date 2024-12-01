import React from 'react';
import { Link } from 'react-router-dom';  
import logo from "./logo.png";
import { Navbar, Nav } from 'react-bootstrap';  
import './navbar.css';  

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant='dark' expand="lg" className="navbar">
      <div className='navbar-header'>
        <div>
            <Navbar.Brand as={Link} to="/" className="navbar-brand">
                <img src={logo} alt="Logo" className="navbar-img" />
            </Navbar.Brand>
        </div>
        <div className="navbar-title">
            <Navbar.Text>
                <h3>CARBON FOOTPRINT TRACKER</h3>
            </Navbar.Text>
        </div>
      <div>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="justify-content-center">
        <Nav className="navbar-links">
          <Nav.Item>
            <Nav.Link as={Link} to="/" className="navbar-link">Quiz</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/tips" className="navbar-link">Tips</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/results" className="navbar-link">Results</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      </div>
      
      </div>
    </Navbar>
  );
};

export default MyNavbar;
