import React from 'react'
import Header from '../../components/Header'
import HomeApresentation from '../../components/HomeApresentation'
import HomeOptions from '../../components/HomeOptions'


import './styles.css'
import './responsive.css'

function HomeHelper() {
    return(
        <div id="page-home-helper">
            <Header/>
            <div className="home-content">
                
                <HomeApresentation/>
                <HomeOptions/>
            </div>
        </div>
       
    )
}


export default HomeHelper