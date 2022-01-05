import React from 'react'
import {Navbar, Container,Nav, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
 
export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'palevioletred'}}>
        <Container>
        <Navbar.Brand href="#home">The Cozy Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Link className="navlink" to={`/`}>Home</Link>
          <br/>
          <Link className="navlink" to={`/add`}>Add</Link>
          <br/>
        <Link className="navlink" to={`/list`}>List</Link>
          </Nav>
          <Nav>
            <Nav.Link className="navlink">Login</Nav.Link>
            <Nav.Link  className="navlink">
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default NavBar