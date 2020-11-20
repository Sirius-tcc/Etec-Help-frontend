import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import HeaderBottom from '../../components/HeaderBottom'
import Topic from '../../components/Topic'
import { getTypeUser } from '../../scripts/getTokenData'
import api from '../../services/api'

import './styles.css'


function SubjectPage(props){

    const [topics, setTopics] = useState([])
    const subject = props.match.params.subject

    useEffect( ()=> {
        async function fetchTopic(){
            const response = await api.get(`/topic/list/${subject}`)
            const { data } = response
            setTopics(data.data)
        }

        fetchTopic()
    }, [subject])

    return(
        <div id="subject-page">
            <div className="header">
                <Header title={ subject } to={ `/${ getTypeUser() }/home` }/>
                <HeaderBottom title={`Estes são os tópicos  de ${ subject.toLowerCase() }`}/>
            </div>
            <div className="topic-container">
                {
                    topics.map( topic => (
                        <Topic key={ topic.code } img={ topic.icon } name={ topic.name } topic={ subject }/>
                    ))
                }
            </div>
        </div>
    )
}

export default SubjectPage