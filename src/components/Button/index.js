import React from 'react'

import './styles.css'

function Button({ buttonName, ...rest }){

    return(
        <button className="button" {...rest }>
            { buttonName }
        </button>
    );
    
}

export default Button