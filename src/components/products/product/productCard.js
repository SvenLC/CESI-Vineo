import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ProductCard.module.css';

const style = {
    textDecoration: 'none',
    color: 'inherit'
}


const productCard = (props) => {
    return (
        <Link style={style} to={`/customer/${props.wine.id}`} >
            <div className={styles.global}>
                <div>
                    <img className={styles.picture} src={props.wine.img} alt="vin" />
                </div>
                <div className={styles.chateauDomaine}>{props.wine.name}</div>
                <div>
                    <span className={styles.region}>{props.wine.region}</span>&nbsp;
            <span className={styles.appellation}>{props.wine.label}</span>
                </div>
                <div className={styles.prixU}>{props.wine.price} €</div>
            </div>
        </Link >
    )
}

export default productCard;