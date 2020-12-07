import React, { useState, useEffect } from 'react'
import LogOut from '../../assets/images/logout.svg'
import { Link, useHistory } from 'react-router-dom'
import { getTypeUser, getUserId } from '../../scripts/getTokenData'
import api from '../../services/api'

import './styles.css'
import './responsive.css'


function HeaderHome({ position, title }){
    
    const { push } =  useHistory()

    const [ show, setShow ] = useState(false)
    const [ user, setUser ] = useState(false)

    const handleMenu = () => {
        setShow(!show)
    }
    
    document.body.style.overflow =  show?"hidden":"initial";
    const stylesCss = {position}
    
    useEffect(() =>{
        async function fetchHelperData(){
            const res = await api.get(`/helper/show/${ getUserId() }`)
            const data = res.data.data[0]

            setUser(data)
        }

        async function fetchStudentData(){
            const res = await api.get(`/student/show/${ getUserId() }`)
            const data = res.data.data[0]

            setUser(data)
        }

        if(getTypeUser() === "helper"){
            fetchHelperData()
        }else{ fetchStudentData() }

    }, [])

    return(
        <header className={`page-header ${ show?"on":"" }`} style ={stylesCss} >
             <div className="menu-toggle" onClick={ handleMenu }>
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
            </div>

            <div className="header-content">
                <Link to={`/${ getTypeUser() }/profile`} >
                    <div className="user">
                        <div className="user-img">
                            {user.photo ? <img src={ user.photo } alt={ user.name } width={'100%'}/> : <></>}
                        </div>
                        <h2>{ user && `${user.name} ${user.surname}` }</h2>
                    </div>
                </Link>
                
                {title?<h1 className="title">{title}</h1>:<></>}
                
                <div className="logout" onClick={() => {
                    localStorage.clear()
                    push('/')
                }}>
                    <img src={ LogOut } alt="sair"/>
                </div>

            </div>
        </header>
    )
}


export default HeaderHome