import React from 'react'
import { useHistory } from 'react-router-dom';
import './styles.css'







function Option({ image, title, link}){
    const history = useHistory();
    
    return(
        <div id="option" onClick={e => {
            history.push(`${link}`);
        }}>
            <div className="box">
                <img src={ require(`../../assets/images/${image}`) } alt=""/>
                <h4>{ title }</h4>
            </div>
        </div>

    )
}


export default Option