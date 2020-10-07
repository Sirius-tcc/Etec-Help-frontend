import React from 'react'
import Header from '../../components/Header'
import Subject from '../../components/Subject'
import Classification from '../../components/Classification'
import InputForm from '../../components/InputForm'
import TextArea from '../../components/TextArea'
import CheckBox from '../../components/CheckBox'
import Button from '../../components/Button'
import CameraIcon from '../../assets/images/camera.svg'
import ImportantIcon from '../../assets/images/important.svg'

import './styles.css'
import './responsive.css'

function ProfileHelper(){
    return(
        <div id="profile-helper">
            <Header
                title="Meu Perfil"
                to="/helper/home"
                userName="Tiago Luchtenberg"
            />
            
            <div className="profile-content">

                <div className="profile">
                    <div className="user">
                        <div className="user-image">


                            <div className="upload">
                                <label for="upload-photo">
                                    <img src={ CameraIcon } alt=""/>
                                </label>
                            </div>
                            

                            <input 
                                type="file" 
                                name="photo"
                                id="upload-photo" 
                                accept="image/png, image/jpeg" 
                            />
                                
                        </div>

                        <div className="name">
                            <h2>Tiago Luchtenberg</h2>
                        </div>
                        
                        <div className="subject-user">
                            <Subject name="Programação"/>
                        </div>

                        <div className="classification">
                            <Classification classification={ 5 }/>
                        </div>

                    </div>

                    
                </div>

            </div>
            <section className="form-content">
                <form>
                    <h2>Seus dados</h2>

                    <hr/>

                    <div className="row first-row">
                        <InputForm
                            name="Nome"
                        />
                        <InputForm
                            name="Sobrenome"
                        />
                    </div>

                    <div className="row second-row">
                        <InputForm
                            name="E-mail"
                        />
                    </div>

                    <div className="row second-row">
                        <TextArea
                            name="Biografia"
                        />
                    </div>

                    <div className="subject-container">
                        <h2>Matérias</h2>
                        <hr/>
                        <h3>
                            Selecione as matérias das quais você poderá compartilhar seu 
                            conhecimento e ajudar os outros
                        </h3>

                        <div className="subjects">

                            <div className="subject">
                                <CheckBox/>
                                <h4>Programação</h4>
                            </div>

                            <div className="subject">
                                <CheckBox/>
                                <h4>Matemática</h4>
                            </div>
                        </div>
                    </div>

                    <div className="important-container">
                        <div className="important-menssage">
                            <img src={ ImportantIcon } alt=""/>
                            <h4>
                                Importante! <br/>
                                Preencha todos os dados corretamente
                            </h4>
                        </div>
                        <Button buttonName="Salvar cadastro"/>
                    </div>
                </form>
            </section>
        </div>
    )
}


export default ProfileHelper