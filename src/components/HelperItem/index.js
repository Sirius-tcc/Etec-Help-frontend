import React from 'react'
import Subject from '../Subject'
import Classification from '../Classification'
import Button from '../Button'

import './styles.css'
import './responsive.css'

function HelperItem({ image, name, subjects, classification, bio, givenHelpers }){

    return(
        <div id="helper-item">

            <div className="helper-content">
                <div className="helper-info">
                    
                    <div className="photo-name-subjects">
                        <div className="img-helper">
                            <img src={image} alt="bia"/>
                        </div>
                        <div className="helper-name-subject">
                            <h2 className="name-helper">{ name }</h2>

                            <div className="subjects-helper">
                                {subjects.map(subject =>(
                                    <Subject
                                        name= {subject.subject}
                                        color={subject.color}
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
                    <h4>{ bio }</h4>
                </div>
            </div>

            <hr/>

            <div className="contacts">
                <h5>{`Já ajudou ${givenHelpers} alunos`}</h5>
                
                <div className="contact-button">
                    <Button buttonName="Entrar em contato"/>
                </div>
            </div>
        </div>
    )
}

export default HelperItem