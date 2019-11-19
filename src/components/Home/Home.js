import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'

import { Link } from 'react-router-dom';

import Modal from '../UI/Modal/Modal';
import Backdrop from '../UI/Backdrop/Backdrop';
import Login from '../Login/Login';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            user: {
                login: '',
                password: ''
            }
        };
    }


    openModal = () => {
        console.log('toto');
        this.setState({ modal: true })
    }

    cancelLogin = () => {
        this.setState({ modal: false })
    }

    connection = (user) => {
        console.log(user + 'toto')
    }




    render() {

        return (
            <div>

                <Link to='/Producer'><p>Producteur</p></Link>
                <Link to='/Customer'><p>Client</p></Link>
                <button onClick={this.openModal}>modal</button>
                <Modal show={this.state.modal} modalClosed={this.cancelLogin}>
                    <Login connection={this.connection} />
                </Modal>

            </div>
        )
    }
}

export default Home;