import React from 'react'
import Subject from '../Subject'
import Classification from '../Classification'
import Button from '../Button'
import { useHistory } from 'react-router-dom'

import './styles.css'
import './responsive.css'

function HelperItem({id,  image, name, subjects, classification, bio, givenHelpers }){


    const { push } = useHistory()
    return(
        <div id="helper-item">

            <div className="helper-content">
                <div className="helper-info">
                    
                    <div className="photo-name-subjects">
                        <div className="img-helper">
                            {image ? <img src={image} alt={name}/> : <></>}
                        </div>
                        <div className="helper-name-subject">
                            <h2 className="name-helper">{ name }</h2>

                            <div className="subjects-helper">
                                {subjects.map((subject, index) =>(
                                    <Subject
                                        key={ index }
                                        name= {subject}
                                        boxWidth="130px"
                                        fontSize="12px"
                                        circleWidth="10px"
                                        boxBoderRadius="30px"
                                    />
                                ))}

                            </div>
                        
                    </div>
                    
                    </div>
                    <div className="classification-helper">
                        
                        <Classification 
                            classification={classification}
                            width="20px"
                        />
                    </div>
                </div>

                <div className="bio-helper">
                    <pre>{ bio }</pre>
                </div>
            </div>

            <hr/>

            <div className="contacts">
                <h5>{`Já ajudou ${givenHelpers} vezes`}</h5>
                
                <div className="contact-button">
                    <Button buttonName="Entrar em contato"
                        onClick = { () => {
                            push(`/student/chat/${id}`)
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default HelperItem