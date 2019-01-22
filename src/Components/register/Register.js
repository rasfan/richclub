import React, { Component } from 'react';
import './Register.scss';
import { Container, Row, Col, InputGroup, Input, NavItem, NavLink } from 'reactstrap';
import logo from './../../utils/images/logo.png';
import signUp from './../../utils/images/signup.png';
class Register extends Component {
    render() {
        return (
            <form>
                <Container>
                    <Row>
                        <Col
                            xs={{ size: '6', offset: 3 }}
                            className="home-logo"
                        >
                            <img
                                src={logo}
                                width="100%"
                                height="100%"
                                alt="logo"
                            />
                        </Col>
                    </Row>
                    <Col md={{ size: '6', offset: 3 }} className="colInput">
                        <InputGroup size="md">
                            <Input placeholder="Name" className="input" />
                        </InputGroup>
                    </Col>
                    <Col md={{ size: '6', offset: 3 }} className="colInput">
                        <InputGroup size="md">
                            <Input placeholder="Email" className="input" />
                        </InputGroup>
                    </Col>
                    <Col md={{ size: '6', offset: 3 }} className="colInput">
                        <InputGroup size="md">
                            <Input placeholder="Password" className="input" />
                        </InputGroup>
                    </Col>
                    <Col md={{ size: '6', offset: 3 }} className="colInput">
                        <InputGroup size="md">
                            <Input
                                placeholder="Confirm Password"
                                className="input"
                            />
                        </InputGroup>
                    </Col>
                    <Row>
                        <Col md="4"></Col>

                        <Col md="4">
                            <Row>
                                <Col xs="3"></Col>
                                <Col xs="6" className="btnLogin">
                                    <button type="submit">
                                        <img

                                            width="80%"
                                            height="80%"
                                            src={signUp}
                                            alt="sigin"
                                        />
                                    </button>

                                </Col>
                                <Col xs="3"></Col>
                            </Row>

                        </Col>
                        <Col md="4"></Col>

                    </Row>

                    <Row >
                        <Col xs="4"></Col>
                        <Col xs="4" className="signIn-link">
                            {/* <a href="/sign-in"> - sign In -</a> */}
                            <NavItem>
                                <NavLink href="/sign-in"> - sign In -</NavLink>
                            </NavItem>
                        </Col>
                        <Col xs="4"></Col>
                    </Row>
                    <div className="footer" />
                </Container>
            </form>
        );
    }
}

export default Register;
