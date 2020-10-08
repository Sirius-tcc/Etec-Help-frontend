import React from 'react'
import Option from '../Option'
import Heart from '../../assets/images/heart.svg'

import './styles.css'

function HomeOptions(){
    return(
        <div id="home-options">
            <div className="options">
                <Option image="chat.svg" title="Conecte no chat, e ajude os alunos" link="chat"/>
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

    )
}


export default HomeOptions