import React, { Component } from 'react';
import './Sign-in.scss';
import { Container, Row, Col, InputGroup, Input } from 'reactstrap';
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
                            <Input placeholder="Email" className="input" />
                        </InputGroup>
                    </Col>
                    <Col md={{ size: '6', offset: 3 }} className="colInput">
                        <InputGroup size="md">
                            <Input placeholder="Password" className="input" />
                        </InputGroup>
                    </Col>
                    <Row>
                        <Col md="4"></Col>

                        <Col md="4">
                            <Row>
                                <Col sm="3" xs="3"></Col>
                                <Col sm="6" xs="6" className="btnLogin">
                                    <button type="submit">
                                        <img

                                            width="80%"
                                            height="80%"
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
                            <a href="/Register"> - Create New Account -</a>
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
