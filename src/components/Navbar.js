import React from 'react';
import {NavLink} from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navbars() {
    return (
        <>
            <Navbar className="NavbarColor" expand="lg" variant="dark" sticky="top">
                <Container className="mt-4">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <NavLink className="nav-link" to='/home'>Home</NavLink>
                        <NavLink className="nav-link" to='/about'>About</NavLink>
                        <NavLink className="nav-link" to="/skills">Skills</NavLink>
                        <NavLink className="nav-link" to="/work">Work</NavLink>
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbars
