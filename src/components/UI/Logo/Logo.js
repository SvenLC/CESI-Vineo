import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Logo.module.css';
import logoVineo from '../../../assets/images/logoDetour.png'

const logo = (props) => {
    return (
        <Link to='/'><img className={styles.log} src={logoVineo} alt="logo" /></Link>

    )
}

export default logo;