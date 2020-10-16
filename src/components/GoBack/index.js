import React from 'react'
import { useHistory } from 'react-router-dom'
import BackIcon from '../../assets/images/back.svg'


import './styles.css'
function GoBack(){
    const { goBack } = useHistory()

    return(
        <button className="goBack-content" onClick={goBack}>
            <img src={ BackIcon } alt="Voltar"/>
        </button>
    )
}

export default GoBack