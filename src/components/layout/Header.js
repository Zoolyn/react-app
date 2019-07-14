import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

export default function Header() {
    return (
        <Nav justify className="justify-content-center" defaultActiveKey="/" style={navStyle}>
            <NavItem>
                <NavLink href="/">home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink eventKey="link-1" href="/about">about me</NavLink>
            </NavItem>
            <NavItem>
                <NavLink eventKey="link-2" href="/work">work</NavLink>
            </NavItem>
        </Nav>
    )
}

const navStyle = {
    color: 'black'
}