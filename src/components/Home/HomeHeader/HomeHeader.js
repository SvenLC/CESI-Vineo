import React, { Component } from 'react';
import Login from '../../Login/Login';
import Logo from '../../UI/Logo/Logo';
import Modal from '../../UI/Modal/Modal';
import styles from './HomeHeader.module.css';


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
        this.setState({ modal: true })
    }

    cancelLogin = () => {
        this.setState({ modal: false })
    }

    render() {
        return (
            <div className={styles.hautdepage}>
                <div className={`${styles.hautdepage} ${styles.accueil}`}>
                    <header className={styles.homeEntete}>
                        <Logo />
                        <div className={styles.topRight}>
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