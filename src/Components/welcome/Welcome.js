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
                    <Col md="3" />
                    <Col md="6" className="welcome-baner">

                        <a width="60%" height="60%" href="/dashboard"><img

                            src={welcome}
                            width="90%"
                            height="90%"
                            alt="welcome"
                        /></a>
                    </Col>
                    <Col md="3"></Col>

                </Row>
                <Row className="users">
                    <Col xs="12" md="3">

                        <ModalExample  >
                            <img sizes="3" width="30%" height="30%" src={user} alt="user" />
                        </ModalExample>{' '}
                        <p id="name">Reza Zakeri</p>

                    </Col>
                    <Col xs="12" md="3">

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

                    </Col>
                    <Col xs="12" md="3">

                        <ModalExample>
                            <img sizes="3" width="30%" height="30%" src={user} alt="user" />
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
