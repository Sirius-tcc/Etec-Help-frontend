import React from 'react'

import './styles.css'

function Subject({ name }){
    return(
        <div id="subject">
            <div className="box">
                <div className="circle"></div>
                <h2>{ name }</h2>
            </div>
        </div>
    )
}


export default Subject