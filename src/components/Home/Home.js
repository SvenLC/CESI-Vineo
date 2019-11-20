import React, { Component, Fragment } from 'react'

import styles from './Home.module.css';
import Footer from '../Footer/Footer';
import Header from './HomeHeader/HomeHeader';
import schema from '../../assets/images/schema.jpg'
import vineoRestaurateur01 from '../../assets/images/vineoRestaurateur01.jpg'
import vineoRestaurateur02 from '../../assets/images/vineoRestaurateur02.jpg'
import vineoProducteur01 from '../../assets/images/vineoProducteur01.jpg'
import vineoProducteur02 from '../../assets/images/vineoProducteur02.jpg'


class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className={styles.article}>
                    <div className={styles.accroche}>
                        <div className={styles.accroche1}>
                            <h1>LE LIEN DU RESTAURATEUR AU PRODUCTEUR</h1>
                        </div>
                        <div className={styles.accroche2}>
                            Professionnels de la restauration, achetez votre vin auprès des meilleurs producteurs,
                            et bénéficiez de conseils avisés d'experts.
                            Producteurs, vendez vos vins à votre convenance à un vaste réseau de restaurateurs.
                    </div>
                    </div>
                    <div className={styles.explication}>
                        <img className={styles.schema} src={schema} />
                    </div>
                    <div className={styles.partenaires}>
                        Ils travaillent avec nous
                </div>
                    <div className={styles.blocGlobalRestProd}>
                        <div>
                            <div className={styles.restaurateurs}>
                                <div>RESTAURATEURS</div>
                                <div className={styles.blocPhotoPrenom}>
                                    <div className={styles.vertical}>
                                        <img className={styles.portraits} src={vineoRestaurateur01} />
                                        Philippe
                                    </div>
                                    <div className={styles.vertical}>
                                        <img className={styles.portraits} src={vineoRestaurateur02} />
                                        Gordon
                                    </div>
                                </div>
                                <div className={styles.atouts}>
                                    <div className={styles.br}>ATOUTS POUR LES RESTAURATEURS</div>
                                    <div className={styles.br}>Soyez fier de votre carte des vins</div>
                                    <div className={styles.br}>Différenciez vous de la concurrence en</div>
                                    <div>découvrant 800 vignerons récoltants</div>
                                    <div className={styles.br}>Bénéficiez d’un accompagnement personnalisé</div>
                                    <div>dans la construction de votre carte</div>
                                    <div className={styles.br}>Gagnez du temps avec un interlocuteur unique,</div>
                                    <div>de la commande à la facturation</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.producteurs}>
                            <div>PRODUCTEURS</div>
                            <div className={styles.blocPhotoPrenom}>
                                <div className={styles.vertical}>
                                    <img className={styles.portraits} src={vineoProducteur01} />
                                    Gerard
                                </div>
                                <div className={styles.vertical}>
                                    <img className={styles.portraits} src={vineoProducteur02} />
                                    Pierre
                                </div>
                            </div>
                            <div className={styles.atouts}>
                                <div className={styles.br}>ATOUTS PRODUCTEURS</div>
                                <div className={styles.br}>Travaillez avec de grands restaurants</div>
                                <div className={styles.br}>Gérez de façon flexible vos stocks</div>
                                <div className={styles.br}>Valorisez vos produits à votre convenance</div>
                                <div className={styles.br}>Améliorez votre réseau et</div>
                                <div>votre réputation</div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </Fragment>
        )
    }
}

export default Home;