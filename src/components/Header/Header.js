import React, { Component } from 'react';

import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Logo from '../UI/Logo/Logo';
import Navbar from '../Navbar/Navbar';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', toto: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        console.log(event.target.value)
        // console.log(this.state.value);
    }


    render() {
        return (
            <div className={styles.hautdepage}>
                <header className={styles.entete}>
                    <Logo/>
                    <input className={styles.inputText} type={"text"} size={35} placeholder={"Recherche"} />
                    <div className={styles.topRight}>
                        <div className={styles.bouton + ' ' + styles.fav} >Favoris</div>
                        <div className={styles.bouton + ' ' + styles.cart} >Panier</div>
                        <div className={styles.bouton + ' ' + styles.cont} >Contact</div>
                        <div className={styles.bouton + ' ' + styles.log}>Compte</div>
                    </div>
                    
                </header>
                <Navbar/>
            </div>
            
            
        )
    }
}
export default Header;