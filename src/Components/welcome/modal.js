import React from 'react';
import { Button, Modal, ModalBody, } from 'reactstrap';
import './modal.scss';
import user from './../../utils/images/img-user1.png';
import telegram from './../../utils/images/tel.png';
import insta from './../../utils/images/insta.png';

class ModalExample extends React.Component {
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
            <div>
                <Button className="modalbtn" color="danger" onClick={this.toggle}>
                    <img xs="2" src={user} alt="user"></img>

                    {this.props.buttonLabel}
                </Button>
                <Modal className="mainModal"
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                //className={this.props.className}
                >

                    <ModalBody className="modalcontent">
                        <img sizes="3" src={user} alt="user"></img>
                        <div className="user-info">
                            <p>رضا ذاکری </p>
                            <p>دانشجوی گرافیک دانشگاه شهید بهشتی</p>
                            <p>متولد ۱۳۶۸ ساکن تهران</p>
                        </div>
                        <div>

                            <a href="/welcome">
                                <img
                                    width="10%"
                                    src={telegram}
                                    alt="telegram"
                                />
                            </a>
                            <a href="/welcome">
                                <img width="10%" src={insta} alt="instagram" />
                            </a>
                        </div>

                    </ModalBody>

                </Modal>


            </div>
        );
    }
}

export default ModalExample;
