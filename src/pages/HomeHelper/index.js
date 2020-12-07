import React from 'react'
import HeaderHome from '../../components/HeaderHome'
import HomeApresentation from '../../components/HomeApresentation'
import Option from '../../components/Option'
import Heart from '../../assets/images/heart.svg'
import { getTypeUser } from '../../scripts/getTokenData'

import './styles.css'
import './responsive.css'

function HomeHelper() {
    return(
        <div id="page-home-helper">
            <HeaderHome/>
                <div className="home-content">
                    <HomeApresentation/>
                    
                    <div id="home-options">
                        <div className="options">
                            <Option 
                                image="chat.svg" 
                                title="Conecte no chat, e ajude os alunos" 
                                link={`/${ getTypeUser() }/chat/0`}
                            />
                            <Option image="pie.svg" title="Matemática tópicos" link="/subject/Matemática"/>
                            <Option image="hacker.svg" title="Programação tópicos" link="/subject/Programação"/>
                        </div>
                        <div className="thanks">
                            <h3>
                                Muito obrigado por compartilhar seu conhecimento
                                <img src={ Heart } alt="coração"/> 
                            </h3>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default HomeHelper