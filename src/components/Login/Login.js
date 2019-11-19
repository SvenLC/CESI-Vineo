import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import styles from './Login.module.css';
import Producer from '../Producer/Producer';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: '',
            password: '',
            link: false
        }
    }

    handleLogin = (event) => {
        this.setState({ login: event.target.value });
    }

    handlePassword = (event) => {
        this.setState({ password: event.target.value });

    }

    resetState = () => {
        this.setState({login: ''}, {password: ''},{link: false})
    }

    connection = () => {
        console.log(this.state.login + ' ' + this.state.password)
        console.log(this.state.link)
        if (this.state.login == 'producteur' && this.state.password == 'test') {
            this.setState({ link: 'producer' })
        }
        if (this.state.login == 'client' && this.state.password == 'test') {
            this.setState({ link: 'customer' })
        }
        if (!this.state.link) {
            this.setState({ link: 'error' })
        }
    }

    render() {
        if (this.state.link == 'producer') {
            return <Redirect to='/producer' />
        }
        if (this.state.link == 'customer') {
            return <Redirect to='/customer' />
        }
        let error;
        if (this.state.link) {
            error =
                <p className={styles.error}>Votre login ou votre mots de passe est incorrect</p>

        }
        return (
            <div className={styles.loginContainer}>
                <h2 className={styles.loginTitle}>CONNEXION</h2>
                <form className={styles.loginForm}>
                    <label className={styles.loginBlock} >Email</label>
                    <input className={styles.loginBlock} onChange={this.handleLogin} type={'text'} />
                    <label className={styles.loginBlock} >Mot De Passe</label>
                    <input className={styles.loginBlock} onChange={this.handlePassword} type={'password'} />
                </form>
                {error}
                <button type={'submit'} className={styles.loginButton} onClick={this.connection} >OK</button>
            </div>
        )
    }
}

export default Login;