import React, { Component } from 'react';
import './Welcome.scss';
import enter from './../../utils/images/ok2.png';
import welcome from './../../utils/images/wel2.png';
import user from './../../utils/images/img-user1.png';
import SimpleModalWrapped from './../modal/modal';

class Welcome extends Component {
    render() {
        return (
            <div className="container-home">
                <div className="logo" />
                <div className="welcome">
                    <img src={welcome} alt="welcome" />
                    <a href="/dashboard">
                        {' '}
                        <img src={enter} alt="enter" />
                    </a>
                </div>
                <div className="luxury">
                    <ul>
                        <li>
                            <SimpleModalWrapped>
                                <img src={user} alt="user" />
                            </SimpleModalWrapped>{' '}
                            <p id="name">Reza Zakeri</p>
                        </li>

                        <li>
                            <SimpleModalWrapped classes="modal">
                                <img src={user} alt="user" />
                            </SimpleModalWrapped>
                            <p id="name">Reza Zakeri </p>
                        </li>
                        <li>
                            <SimpleModalWrapped>
                                <img src={user} alt="user" />
                            </SimpleModalWrapped>
                            <p id="name">Reza Zakeri </p>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Welcome;
