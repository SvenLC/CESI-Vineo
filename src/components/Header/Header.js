import React from 'react';

import styles from './Header.module.css';
import {Link} from 'react-router-dom';

const navigationItems = (props) => (
    <header className={styles.header}>
        <h1>Header</h1>
        <Link to='/' className={styles.link}>Accueil</Link>
    </header>
    
);
export default navigationItems;