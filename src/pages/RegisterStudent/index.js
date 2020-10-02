import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo.svg'
import TableClass from '../../assets/images/table_class.svg'

import InputLogin from '../../components/InputLogin'
import Button from '../../components/Button'
import ImageApresentation from '../../components/ImageApresentation'


import './styles.css'
import './responsive.css'
import './scroll.css'

function RegisterStudent(){
    return(
        <div id="page-register-student">
             <ImageApresentation 
                text_above="Receba ajuda dos 
                melhores helpers 
                da sua Etec."
            >
                    <img src={ TableClass } width="330" alt=""/>
            </ImageApresentation>

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

           
        </div>
    );
}


export default RegisterStudent;