import React, { Component } from 'react';

import styles from './HomeHeader.module.css';
import logoVineo from '../../../assets/images/logoVineo.png';
import Modal from '../../UI/Modal/Modal';
import Login from '../../Login/Login';

class HomeHeader extends Component {

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
            <div className={styles.hautdepage}>
                <div className={'${styles.hautdepage} ${styles.accueil}'}>
                    <header className={styles.homeEntete}>
                        <img className={styles.log} src={logoVineo} />
                        <div className={styles.topRight}>
                            <button className={styles.bouton}>Contact</button>
                            <button className={styles.bouton} onClick={this.openModal}>Connexion</button>
                            <Modal show={this.state.modal} modalClosed={this.cancelLogin}>
                                <Login />
                            </Modal>
                        </div>
                    </header>
                    <div className={styles.sloganBlock}>
                        <p className={styles.homeSlogan}>Le bon vin réjouit le cœur de l'Homme</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader;