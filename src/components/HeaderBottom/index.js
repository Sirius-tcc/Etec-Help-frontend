import React from 'react'

import './styles.css'
import './responsive.css'


function HeaderBottom({ title }){
    return(
        <div id="header-bottom">
            <div className="header-bottom-content">
                <h2>
                    { title }
                </h2>
            </div>
        </div>
    )
}

export default HeaderBottom