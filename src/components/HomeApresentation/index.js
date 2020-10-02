import React from 'react'
import ProfessorApresentation from '../../assets/images/professor-apresentation.svg'
import Logo from '../../assets/images/Logo.svg'

import './styles.css'

function HeaderApresentation(){
    return(
        <div id="home-apresentation">

            <section>
                <div className="logo-and-title">
                    <img src={Logo} alt=""/>
                    <h2>
                        É muito bom ter você 
                        <br/> 
                        conosco! 
                        
                    </h2>

                </div>

                <div className="teacher">
                    <img src={ProfessorApresentation} alt=""/>
                </div>
            </section>
            
        </div>

    )
}


export default HeaderApresentation