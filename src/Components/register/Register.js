import React, { Component } from 'react';
import './Register.scss';
import { Container, Row, Col, InputGroup, Input } from 'reactstrap';
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

                        <Col md={{ size: '7', offset: 4 }} xs={{ size: '6', offset: 3 }}>
                            <div class="btnLogin">
                                <button type="submit">
                                    <img
                                        // md={{ size: '4', offset: 4 }}
                                        width="100%"
                                        height="100%"
                                        src={signUp}
                                        alt="sigin"
                                    />
                                </button>
                            </div>
                        </Col>
                        <Col xs="1" />
                    </Row>
                    <Row className="signIn-link">

                        <Col md={{ size: '7', offset: 5 }} xs={{ size: '12', offset: 3 }} className="signIn-link">
                            <a href="/sign-in"> - sign In -</a>
                        </Col>

                    </Row>
                    <div className="footer" />
                </Container>
            </form>
        );
    }
}

export default Register;
