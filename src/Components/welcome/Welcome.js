import React, { Component } from 'react';
import './Welcome.scss';

import welcome from './../../utils/images/wel2.png';
import user from './../../utils/images/img-user1.png';
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
            <Container>
                <Row>
                    <Col sm="3"></Col>
                    <Col sm="6" className="home-baner">
                        <img

                            src={welcome}
                            width="100%"
                            height="100%"
                            alt="welcome"
                        />
                        <a href="/dashboard">a</a>
                    </Col>
                    <Col sm="3"></Col>
                </Row>
                <Row className="users">
                    <Col md="3">

                        <ModalExample >
                            <img src={user} alt="user" />
                        </ModalExample>{' '}
                        <p id="name">Reza Zakeri</p>

                    </Col>
                    <Col md="3">

                        <ModalExample>
                            <img src={user} alt="user" />
                        </ModalExample>{' '}
                        <p id="name">Reza Zakeri</p>

                    </Col>
                    <Col md="3">

                        <ModalExample>
                            <img src={user} alt="user" />
                        </ModalExample>{' '}
                        <p id="name">Reza Zakeri</p>

                    </Col>
                    <Col md="3">

                        <ModalExample>
                            <img src={user} alt="user" />
                        </ModalExample>{' '}
                        <p id="name">Reza Zakeri</p>

                    </Col>



                </Row>

                <div className="footer" />
            </Container >
        );
    }
}

export default Welcome;
