import React from 'react'
import Logo from '../../assets/images/Logo.svg'
import Heart from '../../assets/images/heart.svg'
import Back from '../../assets/images/back.svg'
import { Link } from 'react-router-dom'
import InputLogin from '../../components/InputLogin'
import CheckBox from '../../components/CheckBox'
import Button from '../../components/Button'

import './styles.css'


function LoginHelper(){
    return(
        <div id="page-login-helper">
            <section className="logo-apresentation">

                <div className="background">

                    <div className="logo">

                        <div className="img">
                            <img src={Logo} alt="Etec-Help"/>
                        </div>

                        <h2>Compartilhe todo o seu conhecimento com outros alunos</h2>
                    </div>
                </div>

            </section>


            <section className="login-container">

                <div className="back">
                    <Link to="/">
                        <img src={Back} alt="Voltar para home"/>
                    </Link>
                </div>

                <div className="form">
                    <form>
                        <h1>Fazer login</h1>

                        <InputLogin first={ true }  name="email" placeholder="Email" />

                        <InputLogin last={ true }  name="password" placeholder="Senha" type="password"/>


                        <div className="login-features">

                            <div className="rememberMe">
                                <CheckBox/>
                                <span>Lembrar-me</span>
                            </div>

                            <Link to="#">
                                Esqueci minha senha
                            </Link>
                            
                        </div>

                        <Button buttonName="Entrar"/>
                        
                        <div className="register-container">

                            <div className="register">
                                <span>Não tem conta?</span>

                                <Link to="#">
                                    Cadastre-se
                                </Link>
                            </div>

                            <span>
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


export default LoginHelper