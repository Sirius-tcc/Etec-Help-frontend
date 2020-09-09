import React from 'react'

import './styles.css'

function Button({ buttonName }){

    return(
        <button className="button">
            { buttonName }
        </button>
    );
    
}

export default Button