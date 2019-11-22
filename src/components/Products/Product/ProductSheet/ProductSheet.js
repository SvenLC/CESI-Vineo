import React from 'react';

import wines from '../../../../shared/Wines';
import styles from './ProductSheet.module.css';

const productSheet = (props) => {
    const wine = wines[props.wineId - 1];
    const option = [];
    for (let index = 1; index < 51; index++) {
        option.push(<option value={index} key={index}>x {index}</option>)
    }

    return (
        <div className={styles.fiche}>
            <div className={styles.enteteProduit}>
                <div className={styles.titreProduit}>
                    <h2>{wine.name}</h2>
                </div>
                <div className={styles.notes}>
                    {/* <img src={"images/rating.JPG"} /> */}
                    <p> : Note du Vineoxpert</p>
                </div>
            </div>
            <div className={styles.corpsProduit}>
                <div className={styles.photoProduit}>
                    <img src={wine.img} alt="vin" />
                </div>
                <div className={styles.infosProduit}>
                    <div className={styles.commandeProduit}>
                        <div className={styles.prix}>
                            <p>{wine.price} €</p>
                        </div>
                        <select required="required" className={styles.quantite}>
                            {option}
                        </select>
                        <button className={styles.boutonPanier} type="button" > Ajouter au panier </button>
                    </div>
                    <div className={styles.descriptionProduit}>
                        <h3>Caractéristiques :</h3>
                        <p>Couleur : {wine.type}<br />
                            Millésime : {wine.year} <br />
                            Pays : {wine.country} <br />
                            Région : {wine.region} <br />
                            Appellation : {wine.naming} <br />
                            Domaine : {wine.name}<br />
                            Degré : {wine.degree}
                        </p>
                        <h3>Description :</h3>
                        <p>{wine.description}</p>
                    </div>
                </div>
            </div>
            <div className={styles.avisExpert}>
                <h3>Avis du Vineoxpert :</h3>
                <p>{wine.expert}</p>
            </div>
        </div>
    )

}

export default productSheet;