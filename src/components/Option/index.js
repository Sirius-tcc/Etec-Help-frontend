import React from 'react'
import './styles.css'

function Option({ image, title }){
    
    return(
        <div id="option">
            <div className="box">
                <img src={ require(`../../assets/images/${image}`) } alt=""/>
                <h4>{ title }</h4>
            </div>
        </div>

    )
}


export default Option