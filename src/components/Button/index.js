import React from 'react'
import Loading from '../Loading'

import './styles.css'

function Button({ buttonName, send=true, loading=false, ...rest }){

    return(
        !send ? (
            <button className="button opacity" disabled {...rest }>
                { buttonName }
            </button>
        ) : (

            !loading ? (
                <button className="button"  {...rest }>
                    { buttonName }
                </button>
            ) : (
                <button className="button loading" disabled {...rest }>
                    <Loading/>
                </button>
            ) 
            
        )
        
    )             
    
    
}

export default Button