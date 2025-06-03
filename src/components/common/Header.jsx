import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='container py-3'>
                <Navbar expand="lg">
                    <Navbar.Brand href="#home" className='logo'><span>UrbanEdge </span> Construction</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav ><Link className='nav-link' to="/">Home</Link></Nav>
                            <Nav><Link className='nav-link' to="/about">About us</Link></Nav>
                            <Nav ><Link className='nav-link' to="/services">Services</Link></Nav>
                            <Nav><Link className='nav-link' to="/">Projects</Link></Nav>
                            <Nav ><Link className='nav-link' to="/">Blogs</Link></Nav>
                            <Nav><Link className='nav-link' to="/">Contact us</Link></Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    )
}

export default Header;
