import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import LogOut from '../../assets/images/logout.svg'
import BackIcon from '../../assets/images/back.svg'


import './styles.css'
import './responsive.css'

function Header({ title, to, userName }){
    
    const [ show, setShow ] = useState(false)

    const handleMenu = () => {
        setShow(!show)
    }

    document.body.style.overflow =  show?"hidden":"initial";
    
    return(
        <header className={`header ${ show?"on":"" }`} >
            <div className="menu-item">
                <div className="menu-toggle-back">
                        <Link to={ to } >
                            <img src={ BackIcon } alt=""/>
                        </Link>
                </div>

                <div className="menu-toggle-header" onClick={ handleMenu }>
                        <div className="div1"></div>
                        <div className="div2"></div>
                        <div className="div3"></div>
                </div>
            </div>
             
            <div className="header-content">

                <div className="back">
                    <Link to={ to }>
                        <img src={ BackIcon } alt=""/>
                    </Link>
                </div>
                
                <div className="title">
                    <h1>{title}</h1>
                </div>

                    <div className="user">
                        <div className="user-img"></div>

                        <h2>{userName}</h2>
                    </div>

                <div className="logout">
                    <img src={ LogOut } alt="sair"/>
                </div>

            </div>
            
        </header>
    )
}


export default Header