import React, { Component } from 'react';

import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logoVineo from '../../assets/images/icons/logoVineo.png'

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
            <header className={styles.entete}>
                <img src={logoVineo} />
                <input className={styles.inputText} type="text" size={"35"} placeholder={"Recherche"} onChange={this.handleChange}></input>
                <div className={styles.topRight}>
                    <Link className={`${styles.bouton} ${styles.fav}`} to='/'>
                        Favoris
            </Link>

                    <div className={`${styles.bouton} ${styles.cart}`}>Panier</div> 
                    <div className={`${styles.bouton} ${styles.cont}`}>Contact</div>
                    <div className={styles.compte}>
                        <div className={`${styles.bouton} ${styles.log}`}>Connexion</div>
                        <div className={`${styles.bouton} ${styles.log}`}>Inscription</div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;