import React from 'react';
import { Button, Modal, ModalBody, Row, Col } from 'reactstrap';
import './modal.scss';
import user from './../../utils/images/img-user1.png';
import telegram from './../../utils/images/tel.png';
import insta from './../../utils/images/insta.png';
import border from './../../utils/images/imag-border.png';

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,


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
            <div>
                <Button className="modalbtn" color="danger" onClick={this.toggle}>
                    <Col className="parent" >
                        <img className="image1" width="100%" height="100%" src={border} alt={border}></img>
                        <img className="image2" width="100%" height="100%" src={user} alt="user"></img>
                    </Col>
                    {/* <img width="100%" height="100%" src={user} alt="user"></img> */}
                    {this.props.buttonLabel}
                </Button>
                <Modal className="mainModal"
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                //className={this.props.className}
                >

                    <ModalBody className="modalcontent">
                        <img width="33%" height="33%" src={user} alt="user"></img>
                        <div className="user-info">
                            <p>رضا ذاکری </p>
                            <p>دانشجوی گرافیک دانشگاه شهید بهشتی</p>
                            <p>متولد ۱۳۶۸ ساکن تهران</p>
                        </div>
                        <div>
                            <Row>
                                <Col xs="2"></Col>
                                <Col xs="3">
                                    <a href="/welcome">
                                        <img
                                            width="70%"
                                            src={telegram}
                                            alt="telegram"
                                        />
                                    </a>
                                </Col>
                                <Col xs="2"></Col>
                                <Col xs="3">
                                    <a href="/welcome">
                                        <img width="70%" src={insta} alt="instagram" />
                                    </a>
                                    <Col xs="2"></Col>
                                </Col>
                            </Row>
                        </div>

                    </ModalBody>

                </Modal>


            </div>
        );
    }
}

export default ModalExample;
