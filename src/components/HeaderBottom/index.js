import React from 'react'

import './styles.css'
import './responsive.css'


function HeaderBottom({ title, subtitle, children }){
    return(
        <div id="header-bottom">
            <div className="header-bottom-content">
                <h2>
                    { title }
                </h2>

                {subtitle?<h4>{ subtitle }</h4>:""}
            </div>

            { children }
        </div>
    )
}

export default HeaderBottom