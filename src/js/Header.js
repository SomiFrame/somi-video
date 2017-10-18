import React, { Component } from 'react';
import somi_logo from '../images/somi-logo.png';
import '../css/Header.css';
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavbarHeader,
    NavbarToggle,
    NavDropdown,
    NavItem,
    FormGroup,
    FormControl,
    Button
} from 'react-bootstrap';
class Header extends Component {
  render() {
    return (
            <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a className="btn" href="#">
                                <img className="app-logo" src={somi_logo}/>
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem href="#">Link</NavItem>
                        </Nav>
                        <Navbar.Form pullRight>
                            <FormGroup>
                                <FormControl type="text" placeholder="名称,类型" />
                            </FormGroup>
                                {' '}
                            <Button type="submit">搜索</Button>
                        </Navbar.Form>
                    </Navbar.Collapse>
            </Navbar>
    );
  }
}

export default Header;
