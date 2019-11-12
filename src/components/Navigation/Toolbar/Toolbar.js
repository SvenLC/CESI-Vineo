import React from 'react';

import styles from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {

    return (
        <header className={styles.Toolbar}>
            <NavigationItems />
            
        </header>
    )
}

export default toolbar;