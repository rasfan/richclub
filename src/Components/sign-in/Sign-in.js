import React, { Component } from 'react';
import './Sign-in.scss';
import { Container, Row, Col, InputGroup, Input, NavItem, NavLink } from 'reactstrap';
import logo from './../../utils/images/logo.png';
import signIn from './../../utils/images/singin.png';
class SignIn extends Component {
    render() {
        return (
            <form>
                <Container >
                    <Row>
                        <Col
                            xs={{ size: '6', offset: 3 }}
                            className="home-logo"
                        > <a href="/"><img
                            src={logo}
                            width="100%"
                            height="100%"
                            alt="logo"
                        /></a>

                        </Col>
                    </Row>

                    {/* <Col>
                        <InputGroup size="md">
                            <Input placeholder="as" className="input" ></Input>
                        </InputGroup>
                    </Col> */}
                    {/* <Col md={{ size: '6', offset: 3 }} className="colInput">
                        <InputGroup size="md">
                            <Input placeholder="Email" className="input" />
                        </InputGroup>
                    </Col>
                    <Col md={{ size: '6', offset: 3 }} className="colInput">
                        <InputGroup size="md">
                            <Input placeholder="Password" className="input" />
                        </InputGroup>
                    </Col> */}
                    <Col md={{ size: '6', offset: 3 }} className="colInput">

                        <Input placeholder="Email" className="input" />

                    </Col>
                    <Col md={{ size: '6', offset: 3 }} className="colInput">

                        <Input placeholder="Password" className="input" />

                    </Col>
                    <Row>
                        <Col md="4"></Col>

                        <Col md="4">
                            <Row>
                                <Col sm="3" xs="3"></Col>
                                <Col sm="6" xs="6" className="btnLogin">
                                    <button type="submit">
                                        <img

                                            width="70%"
                                            height="70%"
                                            src={signIn}
                                            alt="sigin"
                                        />
                                    </button>

                                </Col>
                                <Col sm="3" xs="3"></Col>
                            </Row>

                        </Col>
                        <Col md="4"></Col>

                    </Row>
                    <Row className="signIn-link">
                        <Col md="4" xs="2"></Col>
                        <Col md="4" xs="8" >
                            <NavItem>
                                <NavLink href="/register">- Create new account -</NavLink>
                            </NavItem>
                        </Col>

                        <Col md="4" xs="2"></Col>
                    </Row>
                    <div className="footer" />
                </Container>
            </form >
        );
    }
}

export default SignIn;
