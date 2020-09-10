import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo.svg'
import Blackboard from '../../assets/images/blackboard.svg'

import InputLogin from '../../components/InputLogin'
import Button from '../../components/Button'
import ImageApresentation from '../../components/ImageApresentation'


import './styles.css'
import './responsive.css'
import './scroll.css'

function RegisterHelper(){
    return(
        <div id="page-register-helper">
            <section className="register-content">

                <Link to="/">
                    <img src={ Logo } alt=""/>
                </Link>

                <div className="form">
                    <h1>Cadastro</h1>
                    <h2>Preencha os dados abaixo<br/> para começar.</h2>

                    <form>
                        <InputLogin first name="name" placeholder="Nome"/>
                        
                        <InputLogin name="surname" placeholder="Sobrenome"/>
                        
                        <InputLogin name="email" placeholder="E-mail"/>
                        
                        <InputLogin name="password" type="password" placeholder="Senha"/>
                        
                        <InputLogin last name="confirm password" type="password" placeholder="Confirmar senha"/>


                        <Button buttonName="Concluir Cadastro"/>

                    </form>
                </div>
                
            </section>

            <ImageApresentation 
                text="Seja um Helper e ajude o próximo."
            >
                    <img src={ Blackboard } width="330" alt=""/>
            </ImageApresentation>
            
        </div>
    );
}


export default RegisterHelper;