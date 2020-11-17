import React, {useState} from 'react'
import Logo from '../../assets/images/Logo.svg'
import Heart from '../../assets/images/heart.svg'
import Back from '../../assets/images/back.svg'
import { Link, useHistory } from 'react-router-dom'
import InputLogin from '../../components/InputLogin'
import Button from '../../components/Button'
import api from '../../services/api'
import {getTypeUser} from '../../scripts/getTokenData'
import { toast } from 'react-toastify';
import ImageApresentation from '../../components/ImageApresentation'

import './styles.css'
import './responsive.css'



function LoginStudent(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { push } = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        const __data = {
            email,
            password
        }

        const response = await  api.post('/student/login', __data)
        
        const { data } = response
        
        if(data.sucess){
            // get payload from the token
            const token = data.data
            localStorage.setItem('app-token', token)
            const url = `/${ getTypeUser() }/home`
            push(url)
        }else{
            toast.error('E-mail ou senha estão incorretos!', { position:"top-left" })
        }
    }

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
                    <form onSubmit={ handleSubmit }>
                        <h1>Fazer login</h1>

                        <InputLogin 
                            first 
                            name="email" 
                            placeholder="Email" 
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />

                        <InputLogin 
                            last 
                            name="password" 
                            placeholder="Senha" 
                            type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />

                        <div className="login-features"></div>

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