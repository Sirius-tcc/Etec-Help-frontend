import React from 'react'
import Header from '../../components/Header'
import HeaderBottom from '../../components/HeaderBottom'
import Topic from '../../components/Topic'

import './styles.css'


function SubjectPage(props){

    const subject = props.match.params.subject

    return(
        <div id="subject-page">
            <div className="header">
                <Header to="/helper/home" title={ subject } userName="Tiago Luchtenberg"/>
                <HeaderBottom title={`Estes são os tópicos  de ${ subject.toLowerCase() }`}/>
            </div>
            

            <div className="topic-container">
                <Topic img="aritmetica.svg" name="Aritmética" topic={ subject }/>
                <Topic img="algebra.svg" name="Algebra" topic={ subject }/>
            </div>
        </div>
    )
}

export default SubjectPage