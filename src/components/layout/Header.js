import React from 'react';
import Nav from 'react-bootstrap/Nav';
//import NavItem from 'react-bootstrap/NavItem';
//import NavLink from 'react-bootstrap/NavLink';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed='top'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" style={navStyle}>
                <Nav.Link href="/" style={navbarStyle}>home</Nav.Link>
                <Nav.Link href="/about" style={navbarStyle}>about me</Nav.Link>
                <Nav.Link href="/work" style={navbarStyle}>work</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

const navbarStyle = {
    textAlign: 'center',
    width: '100%'
}

const navStyle = {
    paddingRight: '100px'
}