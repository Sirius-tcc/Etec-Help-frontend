import React from 'react'
import { useHistory } from 'react-router-dom'
import BackIcon from '../../assets/images/back.svg'


import './styles.css'
function GoBack({ to }){
    const { goBack, push } = useHistory()

    return(
        <button 
            className="goBack-content" 
            onClick={()=>( 
                to ? push(to) : goBack()
            )}>
    
            <img src={ BackIcon } alt="Voltar"/>
        </button>
    )
}

export default GoBack