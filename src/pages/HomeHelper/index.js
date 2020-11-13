import React, { useEffect, useState } from 'react'
import HeaderHome from '../../components/HeaderHome'
import HomeApresentation from '../../components/HomeApresentation'
import Option from '../../components/Option'
import Heart from '../../assets/images/heart.svg'
import api from '../../services/api'
import { getUserId, getTypeUser } from '../../scripts/getTokenData'

import './styles.css'
import './responsive.css'

function HomeHelper() {


    const [ user, setUser ] = useState({})

    useEffect(() => {
        async function fetchHelper(){

            const id = getUserId(localStorage.getItem('app-token'))
            const response = await api.get(`/helper/show/${id}`)

            setUser(response.data.data[0])
        }


        fetchHelper()
    }, [])


    return(
        <div id="page-home-helper">
            <HeaderHome
                name={ !!user.name ? `${user.name} ${user.surname}` : ''}
                type="Helper"
                img={ user.photo }
            />
                <div className="home-content">
                    <HomeApresentation/>
                    

                    <div id="home-options">
                        <div className="options">
                            <Option image="chat.svg" title="Conecte no chat, e ajude os alunos" link={`/chat/${ getTypeUser(localStorage.getItem('app-token')) }/1`}/>
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