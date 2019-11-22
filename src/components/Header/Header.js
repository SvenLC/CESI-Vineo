import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Logo from '../UI/Logo/Logo';
import styles from './Header.module.css';


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
                    <Logo />
                    <h1>TOTO</h1>
                    <input className={styles.inputText} type={"text"} size={35} placeholder={"Recherche"} />
                    <div className={styles.topRight}>
                        <div className={styles.bouton + ' ' + styles.fav} >Favoris</div>
                        <div className={styles.bouton + ' ' + styles.cart} >Panier</div>
                        <Link className={styles.link} to='/contact'><div className={styles.bouton + ' ' + styles.cont} >Contact</div></Link>

                        <div className={styles.bouton + ' ' + styles.log}>Compte</div>
                    </div>

                </header>
                <Navbar />
            </div>


        )
    }
}
export default Header;