import React, { Component } from 'react';

import styles from './Products.module.css';
import ProductCard from './Product/ProductCard';
import { blanc, rouge, rose, champ } from '../../assets/images';


const wines = {
    red: {
        name: 'Château de Fonbel 2010',
        region: 'Bordeaux',
        label: 'Saint-Emilion',
        price: '22,50',
        img: rouge
    },
    pink: {
        name: 'Château Cro Magnon 1238',
        region: 'Vin Rosé',
        label: 'Lascaux',
        price: '1022,50',
        img: rose
    },
    white: {
        name: 'Chablis Grand Cru 1988',
        region: 'Les Clos',
        label: 'Tur De Jardin',
        price: '8,50',
        img: blanc
    },
    champagne: {
        name: 'Château de Blindax 2010',
        region: 'Champagne',
        label: 'Cherros',
        price: '25 087,73',
        img: champ
    }
}

class Products extends Component {
    render() {
        return (
            <div className={styles.grid}>
                <ul className={styles.list}>
                    <li>
                        <ProductCard wine={wines.red} />
                        <ProductCard wine={wines.pink} />
                        <ProductCard wine={wines.white} />
                        <ProductCard wine={wines.champagne} />
                    </li>
                    <li>
                        <ProductCard wine={wines.red} />
                        <ProductCard wine={wines.pink} />
                        <ProductCard wine={wines.white} />
                        <ProductCard wine={wines.champagne} />
                    </li>
                    <li>
                        <ProductCard wine={wines.red} />
                        <ProductCard wine={wines.pink} />
                        <ProductCard wine={wines.white} />
                        <ProductCard wine={wines.champagne} />
                    </li>
                    <li>
                        <ProductCard wine={wines.red} />
                        <ProductCard wine={wines.pink} />
                        <ProductCard wine={wines.white} />
                        <ProductCard wine={wines.champagne} />
                    </li>
                </ul>

            </div>


        )
    }
}

export default Products;