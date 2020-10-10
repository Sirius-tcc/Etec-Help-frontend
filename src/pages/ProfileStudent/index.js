import React from 'react'
import Header from '../../components/Header'
import Subject from '../../components/Subject'
import InputForm from '../../components/InputForm'
import Button from '../../components/Button'
import CameraIcon from '../../assets/images/camera.svg'
import ImportantIcon from '../../assets/images/important.svg'

import './styles.css'
import './responsive.css'

function ProfileStudent(){
    return(
        <div id="profile-student">
            <Header
                title="Meu Perfil"
                to="/student/home"
                userName="Beatriz Vitória"
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
                            <h2>Beatriz Vitória</h2>
                        </div>
                        
                        <div className="subject-user">
                            <Subject name="Estudante" color="#9B51E0"/>
                        </div>
                    </div>
                </div>

            </div>
            <section className="form-content">
                <form>
                    <h2>Seus dados</h2>

                    <hr/>

                    <div className="row first-row">
                        <InputForm name="Nome" />
                        <InputForm name="Sobrenome" />
                    </div>

                    <div className="row second-row">
                        <InputForm name="E-mail" type="email" />
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


export default ProfileStudent