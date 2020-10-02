import React from 'react'
import LogOut from '../../assets/images/logout.svg'

import './styles.css'

function Header(){
    return(
        <header className="page-header" >
            <div className="header-content">
                <div className="user">
                    <div className="user-img">

                    </div>
                    <h2>Tiago Luchtenberg</h2>
                </div>

                <div className="logout">
                    <img src={ LogOut } alt="sair"/>
                </div>

            </div>
        </header>
    )
}


export default Header