import React from 'react'

import {Link} from 'react-router-dom';

const home = (props) => {
    return(
        <div>
            <Link to='/Producer'><p>Producteur</p></Link>
            <Link to='/Customer'><p>Client</p></Link>
        </div>
    )
}

export default home;