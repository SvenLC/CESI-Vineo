import React from 'react';

import styles from './ProductCard.module.css';


const productCard = (props) => {
    console.log(props.wine.name)
    return (

        <div className={styles.global}>
            <div>
                <img className={styles.picture} src={props.wine.img} />
            </div>
            <div className={styles.chateauDomaine}>{props.wine.name}</div>
            <div>
                <span className={styles.region}>{props.wine.region}</span>&nbsp;
            <span className={styles.appellation}>{props.wine.label}</span>
            </div>
            <div className={styles.prixU}>{props.wine.price} €</div>
        </div>

    )
}

export default productCard;