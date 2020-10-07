import React from 'react'
import HeaderHome from '../../components/HeaderHome'
import HomeApresentation from '../../components/HomeApresentation'
import HomeOptions from '../../components/HomeOptions'


import './styles.css'
import './responsive.css'

function HomeHelper() {
    return(
        <div id="page-home-helper">
            <HeaderHome/>
                <div className="home-content">
                    <HomeApresentation/>
                    <HomeOptions/>
            </div>
        </div>
        
       
    )
}

export default HomeHelper