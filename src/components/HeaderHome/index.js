import React, { useState } from 'react'
import LogOut from '../../assets/images/logout.svg'
import { Link } from 'react-router-dom'
import './styles.css'
import './responsive.css'

function HeaderHome({ name, type, position, title }){
    



    const [ show, setShow ] = useState(false)

    const handleMenu = () => {
        setShow(!show)
    }

    document.body.style.overflow =  show?"hidden":"initial";
    const stylesCss = {position}
    


    return(
        <header className={`page-header ${ show?"on":"" }`} style ={stylesCss} >

             <div className="menu-toggle" onClick={ handleMenu }>
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
            </div>

            <div className="header-content">
                <Link to={`/${ type }/profile`} >
                    <div className="user">
                        <div className="user-img">

                        </div>
                        <h2>{ name }</h2>
                    </div>
                </Link>
                
                {title?<h1 className="title">{title}</h1>:<></>}
                
                <div className="logout">
                    <img src={ LogOut } alt="sair"/>
                </div>

            </div>
        </header>
    )
}


export default HeaderHome