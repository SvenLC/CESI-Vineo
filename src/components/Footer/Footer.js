import React from 'react';

import styles from './Footer.module.css';

import logoVineoNeg from '../../assets/images/logoVineoNeg.png';


const footer = (props) => {
    return (
        <footer className={styles.piedDePage}>

            <div>
                <label className={styles.abus}><b>Le manque d'alcool est dangereux pour la sociabilité. À consommer avec n'importe qui</b></label>
            </div>

            <div>
                <p><img className={styles.logo} src={logoVineoNeg} align={"center"} alt="logo"/></p>
            </div>

            <div>
                <label className={styles.copyright}><b> Copyright © 1999 - 2019 Vineo - vineo.com Tous droits réservés.</b></label>
            </div>

            <div>
                <nav className={styles.menuFooter}>
                    <ul>
                        <li><a href="#Menu">Conditions générales de vente&nbsp;&nbsp;</a></li>
                        <li><a href="#Catalogue">Mentions Légales&nbsp;&nbsp;</a></li>
                        <li><a href="#Rouge">Utilisation des cookies&nbsp;&nbsp;</a></li>
                        <li><a href="#Rose">Protection des données personnelles&nbsp;&nbsp;</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default footer;