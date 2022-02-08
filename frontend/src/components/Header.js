import React from 'react';
import {Container, Navbar, Nav, NavDropdown, Dropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import {logout} from "../actions/staffActions";


import "../components_css/Header.css"

function Header() {
    const staffLogin = useSelector(state => state.staffLogin);
    const {staffInfo} = staffLogin;

    const dispatch = useDispatch();
    let history = useHistory();

    const logoutHandler = () => {
        dispatch(logout());
        history.push("/");
    }

    return (
        <header className={"sticky-top"}>
            <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Animal Clinic</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {staffInfo ? (
                                staffInfo.isAdmin ? (<React.Fragment>
                                        <LinkContainer to="/create-staff/">
                                            <Nav.Link bsPrefix={"btn btn-light header-button mx-1"}>Create Staff</Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/show-staffs/">
                                            <Nav.Link bsPrefix={"btn btn-info header-button mx-1"}>Show Staffs</Nav.Link>
                                        </LinkContainer>
                                        <NavDropdown title={`${staffInfo.full_name} / Admin`} id="username">
                                            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                        </NavDropdown>
                                    </React.Fragment>
                                ) : (
                                    <NavDropdown title={`${staffInfo.full_name} / Staff`} id="username">
                                        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                )
                            ) : (
                                <LinkContainer to="/login/">
                                    <Nav.Link bsPrefix={"btn btn-light header-button"}>Login</Nav.Link>
                                </LinkContainer>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}


export default Header;