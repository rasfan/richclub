import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Home.scss';
import signup from './../../utils/images/login.png';

import logo from './../../utils/images/logo.png';

class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col
                        md="4"
                        sm={{ size: 'auto', offset: 1 }}
                        className="signIn-link"
                    >
                        <a href="/sign-in"> Sign in</a>
                    </Col>
                </Row>
                <Row>
                    <Col md="5" className="home-logo">
                        <img src={logo} width="100%" height="100%" alt="logo" />
                    </Col>
                    <Col md="1" />
                    <Col md="6" className="home-baner">
                        <img
                            src={signup}
                            width="100%"
                            height="100%"
                            alt="signup"
                        />

                        <a href="/register">sign up</a>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
