import React from 'react'
import Logo from '../../assets/images/Logo.svg'
import Heart from '../../assets/images/heart.svg'
import Back from '../../assets/images/back.svg'
import { Link } from 'react-router-dom'
import InputLogin from '../../components/InputLogin'
import CheckBox from '../../components/CheckBox'
import Button from '../../components/Button'

import './styles.css'
import './responsive.css'
import ImageApresentation from '../../components/ImageApresentation'



function LoginStudent(){
    return(
        <div id="page-login-student">
            <ImageApresentation text="Obtenha ajuda dos melhores de sua Etec!">


                <img src={Logo}  width="100" alt="Logo etec help"/>
            </ImageApresentation>


            <section className="login-container">

                <div className="back">
                    <Link to="/">
                        <img src={Back} alt="Voltar para home"/>
                    </Link>
                </div>

                <div className="form">
                    <form>
                        <h1>Fazer login</h1>

                        <InputLogin first name="email" placeholder="Email" />

                        <InputLogin last name="password" placeholder="Senha" type="password"/>


                        <div className="login-features">

                            <div className="rememberMe">
                                <CheckBox/>
                                <span>Lembrar-me</span>
                            </div>

                            <div className="rememberMe">
                                <Link to="#">
                                    Esqueci minha senha
                                </Link>
                            </div>
                            
                        </div>

                        <Button buttonName="Entrar"/>
                        
                        <div className="register-container">

                            <div className="register">
                                <span>Não tem conta?</span>

                                <Link to="/register-student">
                                    Cadastre-se
                                </Link>
                            </div>

                            <span className="free">
                                É de graça
                                <img src={ Heart } alt=""/>
                            </span>

                        </div>

                    </form>
                </div>
                
            </section>

        </div>
    );
}


export default LoginStudent