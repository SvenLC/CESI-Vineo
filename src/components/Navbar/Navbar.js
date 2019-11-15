import React from 'react';

import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';


const navbar = (props) => (
    <nav className={styles.menu}>
        <ul>
            <li><Link className={styles.child} to='/menu'>Accueil</Link></li>
            <li><Link className={styles.child} to='/catalogue'>Catalogue</Link></li>
            <li><Link className={styles.child} to='/rouge'>Rouge</Link></li>
            <li><Link className={styles.child} to='/blanc'>Blanc</Link></li>
            <li><Link className={styles.child} to='/rose'>Rosé</Link></li>
            <li><Link className={styles.child} to='/champagne'>Champagne</Link></li>
        </ul>
    </nav>

);

export default navbar;