import React from 'react';

import classes from './productCard.css';

const productCard = (props) => {
    const style = {
        width: '300px',
        height: '300px',
        boxShadow: '0px 0px 10px 5px grey',
        margin: '10px 10px'

    }
    return (
        <div style={style}>
            Toto
        </div>
    )
}



export default productCard;