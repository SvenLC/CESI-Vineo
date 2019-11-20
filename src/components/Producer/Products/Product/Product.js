import React from 'react';

import styles from './Product.module.css';

const product = (props) => {
    return (
        <div className={styles.global}>
            <div>
                <img className={styles.picture} src={props.imageUrl}/>
            </div>
            <div className={styles.chateauDomaine}>Château de Fonbel 2010</div>
            <div>
                <span className={styles.region}>Bordeaux</span>&nbsp;
            <span className={styles.appellation}>Saint-Emilion</span>
            </div>
            <div className={styles.prixU}>22,50 €</div>
        </div>
    )
}

export default product;