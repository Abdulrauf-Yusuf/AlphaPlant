import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from './logo.png';
import './Navbar.css';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt='teapot logo' />
          <span style={{ color: '#D1FDD6' }}> AlphaPlant</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: '1px solid #D1FDD6' }} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavItem link="#home" text="Home" />
            <NavItem link="#products" text="Products" />
            <NavItem link="#about" text="About" />
            <NavItem link="#blog" text="Blog" />
            <NavItem link="#signin" text="Sign In" />
            <Button variant="outline-light" className="ml-lg-2 btn-sm">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const NavItem = ({ link, text }) => {
  return (
    <Nav.Link href={link} style={{ color: '#D1FDD6' }}>{text}</Nav.Link>
  );
}

export default Navigation;
