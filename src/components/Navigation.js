import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import logo from '../images/logo2.png';

import './Navigation.css';

const Navigation = () => {
    const navigationBar = () => {
        return (
            <Navbar bg='primary' expand='lg' id="navbar">
                <Navbar.Brand href='#/'>
                    <img
                        alt=''
                        src={logo}
                        width='30'
                        height='30'
                        className='d-inline-block align-top'
                    />{' '}
                    Christabel Sebastian
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link href='#/'>Home</Nav.Link>
                    <Nav.Link href='#/portfolio'>Portfolio</Nav.Link>
                    <Nav.Link href='#/resume'>Resume</Nav.Link>
                    <NavDropdown title='Contact' id='basic-nav-dropdown'>
                    <NavDropdown.Item href='http://github.com/cescarez' target='_blank' rel='noopener noreferrer'>GitHub</NavDropdown.Item>
                    <NavDropdown.Item href='http://linkedin.com/in/christabelsebastian' target='_blank' rel='noopener noreferrer'>LinkedIn</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href='mailto:christabel.e.sebastian@gmail.com' target='_blank' rel='noopener noreferrer'>Email</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                {/* <Form inline>
                    <FormControl type='text' placeholder='Search' className='mr-sm-2' />
                    <Button variant='outline-success'>Search</Button>
                </Form> */}
                </Navbar.Collapse>
            </Navbar>
        )
    }
    return(
        <div className='navigation__div'>
            {navigationBar()}
        </div>
    )
}

export default Navigation;