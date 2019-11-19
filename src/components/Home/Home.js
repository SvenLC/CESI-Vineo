import React, { Component } from 'react'

import { Link } from 'react-router-dom';

import Modal from '../UI/Modal/Modal';
import Backdrop from '../UI/Backdrop/Backdrop';
import Login from '../Login/Login';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false
        };
    }
    

    openModal = () => {
        console.log('toto');
        this.setState({modal : true})
    }

    cancelLogin = () => {
        this.setState({modal: false})
    }

    render() {
       

        return (
            <div>
                
                <Link to='/Producer'><p>Producteur</p></Link>
                <Link to='/Customer'><p>Client</p></Link>
                <button onClick={this.openModal}>modal</button>
                <Modal show={this.state.modal} modalClosed={this.cancelLogin}> <Login></Login></Modal>
                
            </div>
        )
    }
}

export default Home;