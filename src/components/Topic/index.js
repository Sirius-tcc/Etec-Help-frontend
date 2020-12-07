import React from 'react'
import { Link } from 'react-router-dom'


import './styles.css'
import './responsive.css'


function Topic({ img, name, topic }){

    return(
        <div id="topic">
            <Link to={`/subject/${topic}/${name}/videos`}>
                <div className="img-container">
                    <img src={ img } alt={ name }/>
                </div>
                
                <h2>
                    { name }
                </h2>

            </Link>
            
        </div>
    )
}

export default Topic