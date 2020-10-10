import React from 'react'

import './styles.css'

function Subject({ name, color }){
    

    return(
        <div id="subject">
            <div className="box" style={ {  border:`1px solid ${color}` } }>
                <div className="circle" style={ {  backgroundColor:`${color}` } }></div>
                <h2 style={ {  color:`${color}` } }>{ name }</h2>
            </div>
        </div>
    )
}


export default Subject