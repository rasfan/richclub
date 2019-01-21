import React, { Component } from 'react';
import './Welcome.scss';
import logo from './../../utils/images/logo.png';
import welcome from './../../utils/images/wel2.png';
import user from './../../utils/images/img-user1.png';
import border from './../../utils/images/imag-border.png';
import ModalExample from './modal';

import { Container, Row, Col } from 'reactstrap';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        return (
            <Container className="contain">
                <Row>
                    <Col
                        md={{ size: '4', offset: 4 }}
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
                <Row>
                    <Col
                        md={{ size: '6', offset: 3 }}
                        className="welcome-baner"
                    >
                        <a width="100%"
                            height="100%" href="/register"><img
                                src={welcome}
                                width="100%"
                                height="100%"
                                alt="signup"
                            /></a>
                    </Col>
                </Row>

                <Row className="users">

                    <Col xs="4" md="4">

                        <ModalExample  >
                            <img src={user} alt="user" />

                        </ModalExample>{' '}
                        <Col md={{ size: "4", offset: 2 }} ><p id="name">Reza Zakeri</p></Col>

                    </Col>
                    <Col xs="4" md="4" >

                        <ModalExample>
                            <img src={user} alt="user" />
                        </ModalExample>{' '}
                        <Col md={{ size: "4", offset: 2 }} ><p id="name">Reza Zakeri</p></Col>

                    </Col>
                    <Col xs="4" md="4">

                        <ModalExample >
                            <span src={border}><img src={user} alt="user" /></span>


                        </ModalExample>{' '}

                        <Col md={{ size: "4", offset: 2 }} ><p id="name">Reza Zakeri</p></Col>

                    </Col>



                    {/* <Col xs="12" md="3">

                        <ModalExample>
                            <img sizes="3" width="30%" height="30%" src={user} alt="user" />
                        </ModalExample>{' '}
                        <p id="name">Reza Zakeri</p>

                    </Col>
                    <Col xs="12" md="3">

                        <ModalExample>
                            <img sizes="3" width="30%" height="30%" src={user} alt="user" />
                        </ModalExample>{' '}
                        <p id="name">Reza Zakeri</p>

                    </Col> */}



                </Row>


                <div className="footer" />
            </Container >
        );
    }
}

export default Welcome;
