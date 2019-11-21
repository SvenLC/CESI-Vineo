import React, { Component } from 'react';

import styles from './Products.module.css';
import ProductCard from './Product/ProductCard';
import { blanc, rouge, rose, champ } from '../../assets/images';
import wines from '../../shared/Wines';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wines: wines,
            type: ['Rouge', 'Rose']
        };
    }

    render() {
        let filterWine = []
        let wineList = []
        if (window.location.pathname != '/customer') {
            filterWine = this.state.wines.filter(wine =>
                window.location.pathname.replace('/', '') == wine.type.toLowerCase()
            )

        }
        else {
            filterWine = this.state.wines;
        }

        filterWine.forEach(wine => {
            wineList.push(<ProductCard wine={wine} key={wine.id} />)
        });



        return (
            <div className={styles.grid}>
                {wineList}
            </div>


        )
    }
}

export default Products;