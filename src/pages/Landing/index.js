import React from 'react'
import Logo from '../../assets/images/Logo.svg'
import Help from '../../assets/images/help.svg'
import Study from '../../assets/images/study.svg'
import Teacher from '../../assets/images/teacher-completed.svg'

import { Link } from 'react-router-dom'


import './styles.css'
import './responsive.css'


function Landing(){
    return(
        <div id="page-landing">

            <div className="logo-container">
                <img src={Logo} alt="Etec-Help"/>
                <h2>Sua plataforma de mentoria e compartilhamento de conhecimento</h2>
            </div>
            
            
            <div className="buttons-container">
                <Link to="#" className="study">
                    <img src={Study} alt="Estudar"/>
                    Estudar
                </Link>

                <Link to="/login-helper" className="help">
                    <img src={Help} alt="Ajudar"/>
                    Ajudar
                </Link>
            </div>


            <img src={Teacher} alt="Plataforma de estudos" className="teacher-image"/>

        </div>
    );
}

export default Landing