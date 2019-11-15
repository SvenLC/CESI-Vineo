import React from 'react';

import styles from './ProductCard.module.css';


const productCard = (props) => {
    return (
        <div className={styles.Card}>
            <h1 className={styles.H1}>Vin</h1>
        </div>
    )
}

export default productCard;