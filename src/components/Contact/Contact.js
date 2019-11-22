import React, { Fragment } from 'react';
import styles from './Contact.module.css';
import Header from '../Header/Header';

import facebook from '../../assets/images/icons/facebook.png'
import instagram from '../../assets/images/icons/instagram.png'
import twitter from '../../assets/images/icons/twitter.png'

const contact = (props) => {
    return (
        <Fragment>
            <Header />
            <div className={styles.container}>
                <h2>CONTACT</h2>
                <p className={styles.textCom}>Contactez-nous par lettre postale</p>
                <p>Viveo.com</p>
                <p>67, Quai des Buveurs</p>
                <p>33080 Bordeaux Cedex</p>
                <br />
                <p>Contactez-nous par Email</p>
                <p>contact@viveo.com</p>
                <br />
                <p>Contactez-nous par téléphone</p>
                <p>N° VERT : 0 800 1000 99</p>
                <img className={styles.image} src={instagram} alt="" />
                <img className={styles.image} src={facebook} alt="" />
                <img className={styles.image} src={twitter} alt="" />
                <div className={styles.formBlock}>
                    <div className={styles.contactForm}>
                        <label>Nom</label>
                        <input type="text" />
                    </div>
                    <div className={styles.contactForm}>
                        <label>Email</label>
                        <input type="text" />
                    </div>

                    <div className={styles.contactForm}>
                        <label>Sujet</label>
                        <input type="text" />
                    </div>
                    <div className={styles.contactForm}>
                        <label>Message</label>
                        <input className={styles.inputMessage} type="text" />
                    </div>
                    <div className={styles.contactForm}>
                        <button type="submit" className={styles.button}>Envoyer</button>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default contact