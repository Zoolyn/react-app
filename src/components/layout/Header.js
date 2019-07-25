import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" fluid>
        <Navbar.Brand >
            <Link to="/">Jerry Zhu</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav >
            <LinkContainer to="/" style={LinkStyle}>
              <NavItem>home </NavItem>
            </LinkContainer>
            <LinkContainer to="/about" style={LinkStyle}>
              <NavItem>about me </NavItem>
            </LinkContainer>
            <LinkContainer to="/work" style={LinkStyle}>
              <NavItem>work</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      )
}

const navbarStyle = {
    textAlign: 'center'
}

const navStyle = {
    float: 'none',
    display: 'inline-block'
}

const LinkStyle  = {
    paddingRight: '1vw',
    paddingLeft: '1vw'
}