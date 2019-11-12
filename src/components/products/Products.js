import React from 'react';

import styles from './Products.module.css';
import ProductCard from './Product/ProductCard';


const products = (props) => {
    return (
        <div className={styles.grid}>
            <ul className={styles.list}>
            <li>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </li>
            <li>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </li>
            <li>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </li>
        </ul>

        </div>
        

    )
}

export default products;