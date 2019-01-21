import React, { Component } from 'react';
import './Dashboard.scss';
import { Container, Row, Col, InputGroup, Input, InputGroupAddon, InputGroupText } from 'reactstrap';

import Save from './../../utils/images/save.png';
import signup from './../../utils/images/login.png';
class Dashboard extends Component {
    render() {
        return (
            <form>
                <Container>
                    <Row>
                        <Col
                            md={{ size: '6', offset: 3 }}
                            className="welcome-baner"
                        >
                            <img

                                src={signup}
                                width="100%"
                                height="100%"
                                alt="signup"
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md="3" xs="4"></Col>
                        <Col md="6" xs="4">

                            <label >
                                <img width="60%" height="60%" src={Save} alt="upload"></img>
                                <span><Input type="file" id="myfile" name="myfile" /></span>
                            </label>

                        </Col>
                        <Col md="3" xs="4"></Col>
                    </Row>

                    {/* <Col md={{ size: '6', offset: 3 }} >
                        <InputGroup size="xs">
                            <Input size="xs" placeholder="Full Name" />
                        </InputGroup>
                    </Col> */}
                    <Col md={{ size: '6', offset: 3 }} className="colInput">
                        <InputGroup size="md">
                            <Input placeholder="Full name" className="input" />
                        </InputGroup>
                    </Col>
                    <Col md={{ size: '6', offset: 3 }} className="colInput">
                        <InputGroup size="md">
                            <Input placeholder="Bio" className="input" />
                        </InputGroup>
                    </Col>
                    <Col md={{ size: '6', offset: 3 }} className="colInput">
                        <InputGroup size="md">
                            <Input
                                placeholder="Phone number"
                                className="input"
                            />
                        </InputGroup>
                    </Col>

                    {/* <Row>
                        <Col className="colcheck" sm={{ size: '6', offset: 4 }}>
                            <InputGroup size="xs">
                                <Input
                                    type="checkbox"
                                    placeholder="Telegram ID"
                                />
                            </InputGroup>
                            <p>LUXURY persons access to my Telegram ID</p>
                        </Col>
                    </Row> */}
                    <Col md={{ size: '6', offset: 3 }} >
                        <InputGroup readOnly>
                            <InputGroupAddon readOnly addonType="prepend">
                                <InputGroupText className="shik">
                                    <Input readOnly addon type="checkbox" className="input" />

                                </InputGroupText>
                            </InputGroupAddon>
                            <Input readOnly className="input chek " value="LUXURY persons access to my Telegram ID" />
                        </InputGroup>
                    </Col>

                    <Col className="colInput" md={{ size: '6', offset: 3 }}>
                        <InputGroup size="md">
                            <Input
                                placeholder="Telegram ID"
                                className="input"
                            />
                        </InputGroup>
                    </Col>

                    <Col md={{ size: '6', offset: 3 }} >
                        <InputGroup readOnly>
                            <InputGroupAddon readOnly addonType="prepend">
                                <InputGroupText className="shik">
                                    <Input readOnly addon type="checkbox" className="input" />

                                </InputGroupText>
                            </InputGroupAddon>
                            <Input readOnly className="input chek " value="LUXURY persons access to my Insta ID" />
                        </InputGroup>
                    </Col>

                    <Col md={{ size: '6', offset: 3 }} className="colInput">
                        <InputGroup size="md">
                            <Input
                                placeholder="Instagram ID"
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
                                            src={Save}
                                            alt="sigin"
                                        />
                                    </button>

                                </Col>
                                <Col xs="3"></Col>
                            </Row>

                        </Col>
                        <Col md="4"></Col>

                    </Row>


                    <div className="footer" />

                </Container >
            </form >
        );
    }
}

export default Dashboard;
