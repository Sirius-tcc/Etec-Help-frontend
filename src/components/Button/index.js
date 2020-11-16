import React from 'react'

import './styles.css'

function Button({ buttonName, send=true, ...rest }){

    return(
        
        send?
            (
                <button className="button" {...rest }>
                    { buttonName }
                </button>
            ) 
        :   
            (
                <button className="button opacity" disabled {...rest }>
                    { buttonName }
                </button>
            )
    );
    
}

export default Button