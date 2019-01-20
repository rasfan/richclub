import React, { Component } from 'react';
import './Sign-in.scss';
import { Container, Row, Col, InputGroup, Input } from 'reactstrap';
import logo from './../../utils/images/logo.png';
import signIn from './../../utils/images/singin.png';
class SignIn extends Component {
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
                            <Input placeholder="Email" className="input" />
                        </InputGroup>
                    </Col>
                    <Col md={{ size: '6', offset: 3 }} className="colInput">
                        <InputGroup size="md">
                            <Input placeholder="Password" className="input" />
                        </InputGroup>
                    </Col>
                    <Row>
                        <Col md={{ size: '7', offset: 4 }} xs={{ size: '6', offset: 3 }}>
                            <div className="btnLogin">
                                <button type="submit">
                                    <img
                                        // sm="4"
                                        //  md="6"
                                        width="100%"
                                        height="100%"
                                        src={signIn}
                                        alt="sigin"
                                    />
                                </button>
                            </div>
                        </Col>
                    </Row>
                    <Row className="signIn-link">

                        <Col md={{ size: '7', offset: 4 }} xs={{ size: '12', offset: 1 }} className="signIn-link">
                            <a href="/Register"> - Create New Account -</a>
                        </Col>


                    </Row>
                    <div className="footer" />
                </Container>
            </form>
        );
    }
}

export default SignIn;
