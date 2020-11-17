import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Logo from '../../assets/images/Logo.svg'
import TableClass from '../../assets/images/table_class.svg'
import { toast } from 'react-toastify';
import InputLogin from '../../components/InputLogin'
import Button from '../../components/Button'
import ImageApresentation from '../../components/ImageApresentation'


import './styles.css'
import './responsive.css'
import './scroll.css'
import api from '../../services/api';

function RegisterStudent(){

    const [ name, setName ] = useState('')
    const [ surname, setSurname ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')


    const [ canSend, setCanSend ] = useState(false)


    const [ nameError, setNameError ] = useState(false)
    const [ surnameError, setSurnameError ] = useState(false)
    const [ emailError, setEmailError ] = useState(false)
    const [ confirmPasswordError, setConfirmPasswordError ] = useState(false)

    const { push } = useHistory()

    async function handleOnSubmit(e){
        e.preventDefault()

        if( verifyName(name) ) {
            setNameError(false)

        } else {
            toast.error('Nome só pode haver apenas 12 caracteres',  { position: "top-left" });
            setNameError(true)
            return
        }


        if( verifySurname(surname) ) {
            setSurnameError(false)
        } else {
            toast.error('Sobrenome só pode haver apenas 12 caracteres',  { position: "top-left" });
            setSurnameError(true)
            return
        }

        if( verifyEmailValid(email) ) {
                
            if( verifyEmailLength(email) ) {
                
                const checkEMail = await  api.post('student/checkLogin/', {email} )

                const { data } = checkEMail

                if(data.sucess){
                    setEmailError(false)
                }else{
                    toast.error('E-mail já cadastrado',  { position: "top-left" })
                    setEmailError(true)
                    return
                }
                

            } else {
                toast.error('Email Inválido! Apenas pode haver 100 caracteres no máximo!',  { position: "top-left" });
                setEmailError(true)
                return
            }

        } else {
            toast.error('Email Inválido!',  { position: "top-left" });
            setEmailError(true)
            return
        }

        
        if( verifyPassword(password, confirmPassword) ) {
            setConfirmPasswordError(false)
        } else {
            toast.error('A confirmação da senha não confere',  { position: "top-left" });
            setConfirmPasswordError(true)
            return
        }
        

        const __data = {
            name: name.trim(),
            surname: surname.trim(),
            email: email.trim(),
            password: password
        }

        const response = await  api.post('/student/create', __data)

        const { data } = response

        if(data.sucess){
            toast.success('Estudante cadastrado com sucesso!', {
                autoClose: 2000,
            });
            
            setTimeout(() => { 
                push('/login-student'); 
            }, 2000);
            
        }else{
            toast.error('Erro ao cadastrar usuário',  { position: "top-left" })
        }
    }


    useEffect(() => {
        
        if(
            name.trim().length > 0 &&
            surname.trim().length > 0 &&
            email.trim().length > 0 &&
            password.length > 0 &&
            confirmPassword.length > 0
        ){
            setCanSend(true)
        }else{
            setCanSend(false)
        }

    }, [name, surname, email, password, confirmPassword ])



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

                    <form onSubmit={ handleOnSubmit }>
                        <InputLogin 
                            first name="name" 
                            placeholder="Nome"
                            error={ nameError }
                            onChange= {(e) =>{ setName(e.target.value) }}
                        />
                        
                        <InputLogin 
                            name="surname" 
                            placeholder="Sobrenome"
                            error={ surnameError }
                            onChange= {(e) =>{ setSurname(e.target.value) }}
                        />
                        
                        <InputLogin 
                            name="email" 
                            placeholder="E-mail"
                            error={ emailError }
                            onChange= {(e) =>{ setEmail(e.target.value) }}
                        />
                        
                        <InputLogin 
                            name="password" 
                            type="password" 
                            placeholder="Senha"
                            onChange = {(e) =>{ setPassword(e.target.value) }}
                        />
                        
                        <InputLogin 
                            last 
                            name="confirm password" 
                            type="password" placeholder="Confirmar senha"
                            error={ confirmPasswordError }
                            onChange= {(e) =>{ setConfirmPassword(e.target.value) }}
                        />


                        <Button buttonName="Concluir Cadastro" send={canSend} />

                    </form>
                </div>
                
            </section>

           
        </div>
    );
}

function verifyEmailValid(email){

    if(email.indexOf("@") !== -1 && email.indexOf(".") !== -1){
        let splitEmail = email.split('@')

        if (splitEmail[0] !== ''){
            splitEmail = splitEmail[1].split('.')
            
            if
            (
                splitEmail[0] !== '' &&
                splitEmail[1] !== '' 
            ){
                return true
            }
        }

        return false
    }
}

function verifyEmailLength(email) {
    if (email.trim().length <= 100){
        return true
    }

    return false
}

function verifyPassword(password1, password2){
    if (password1 === password2){
        return true
    }

    return false
}

function verifyName(name){
    if (name.trim().length <= 12){
        return true
    }

    return false
}

function verifySurname(surname){
    if (surname.trim().length <= 12){
        return true
    }

    return false
}



export default RegisterStudent;