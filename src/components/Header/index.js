import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import LogOut from '../../assets/images/logout.svg'
import GoBack from '../GoBack'
import api from '../../services/api'
import { getUserId, getTypeUser } from '../../scripts/getTokenData'

import './styles.css'
import './responsive.css'

function Header({ title, to }){
    
    const { push } = useHistory()

    const [ show, setShow ] = useState(false)
    const [ user, setUser ] = useState('')

    const handleMenu = () => {
        setShow(!show)
    }

    
    document.body.style.overflow =  show?"hidden":"initial";
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
        <header className={`header ${ show?"on":"" }`} >
            <div className="menu-item">
                <div className="menu-toggle-back">
                    <GoBack to={to} /> 
                </div>

                <div className="menu-toggle-header" onClick={ handleMenu }>
                        <div className="div1"></div>
                        <div className="div2"></div>
                        <div className="div3"></div>
                </div>
            </div>
             
            <div className="header-content">

                <div className="back">
                    <GoBack/>
                </div>
                
                <div className="title">
                    <h1>{title}</h1>
                </div>

                    <div className="user">
                        <div className="user-img">
                            {!!user.photo && (<img src={ user.photo } alt={ user.name }/>) }
                        </div>

                        <h2>{ `${user.name}  ${user.surname}` }</h2>
                    </div>

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

export default Header