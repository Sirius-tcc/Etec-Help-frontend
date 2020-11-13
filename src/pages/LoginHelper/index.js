import React, {useState} from 'react'
import Logo from '../../assets/images/Logo.svg'
import Heart from '../../assets/images/heart.svg'
import Back from '../../assets/images/back.svg'
import { Link, useHistory } from 'react-router-dom'
import InputLogin from '../../components/InputLogin'
import CheckBox from '../../components/CheckBox'
import Button from '../../components/Button'
import ImageApresentation from '../../components/ImageApresentation'
import api from '../../services/api'
import {getTypeUser} from '../../scripts/getTokenData'

import './styles.css'
import './responsive.css'



function LoginHelper(){


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { push } = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        const __data = {
            email,
            password
        }

        const response = await api.post('/helper/login', __data)
        
        const { data } = response
        
        if(data.sucess){
            // get payload from the token
            const token = data.data
            localStorage.setItem('app-token', token)
            const url = `/${ getTypeUser(token) }/home`
            push(url)

        }else{
            alert('E-mail ou senha estão incorretos!')
        }
    }


    return(
        <div id="page-login-helper">
            <ImageApresentation text="Compartilhe todo o seu conhecimento com outros alunos">


                <img src={Logo}  width="100" alt="Logo etec help"/>
            </ImageApresentation>


            <section className="login-container">

                <div className="back">
                    <Link to="/">
                        <img src={Back} alt="Voltar para home"/>
                    </Link>
                </div>

                <div className="form">
                    <form  onSubmit={handleSubmit}>
                        <h1>Fazer login</h1>

                        <InputLogin 
                            first name="email" 
                            placeholder="Email" 
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }} 
                        />

                        <InputLogin 
                            last name="password"
                            placeholder="Senha"
                            type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }} 
                        />


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

                        <Button buttonName="Entrar" type="submit"/>
                        
                        <div className="register-container">

                            <div className="register">
                                <span>Não tem conta?</span>

                                <Link to="/register-helper">
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


export default LoginHelper