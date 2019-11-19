import React from 'react';

import styles from './Login.module.css';

const login = (props) => {
    return (
        <div class={styles.container}>
            <h2>CONNEXION</h2>
            <form>
                <div className={styles.inputBlock}>
                    <label className={styles.block}>Email</label>
                    <input className={styles.block} type={'text'} />
                </div>
                <div className={styles.inputBlock}>
                    <label className={styles.block}>Mot De Passe</label>
                    <input className={styles.block} type={'text'} />
                </div>

            </form>
            <div className={styles.divButton}>
                <button type={'submit'} className={styles.button}>OK</button>
            </div>


        </div>
    )
}

export default login;