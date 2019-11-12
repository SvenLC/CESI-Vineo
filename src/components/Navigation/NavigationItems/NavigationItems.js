import React from 'react';

import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="\">Vineo</NavigationItem>
        <input type="search" id="site-search" name="q" aria-label="Search through site content"></input>  
        <NavigationItem link="\" active>Favoris</NavigationItem>
        <NavigationItem link="\">Panier</NavigationItem>            
    </ul>
    
);
export default navigationItems;