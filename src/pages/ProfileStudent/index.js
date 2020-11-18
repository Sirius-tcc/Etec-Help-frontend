import React, {useEffect, useState} from 'react'
import Header from '../../components/Header'
import Subject from '../../components/Subject'
import InputForm from '../../components/InputForm'
import Button from '../../components/Button'
import CameraIcon from '../../assets/images/camera.svg'
import ImportantIcon from '../../assets/images/important.svg'
import { getUserId } from '../../scripts/getTokenData'
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import { verifyEmailLength, verifyEmailValid, verifyName, verifySurname } from '../../scripts/ValidateData'

import './styles.css'
import './responsive.css'

function ProfileStudent(){


    const [student, setStudent] = useState({})

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState([]);
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(false)
    
    const { push } = useHistory()



    useEffect(()=>{

        async function fetchProfileStudent(){
            const id = getUserId()
            const response = await api.get(`/student/show/${id}`)
            setStudent(response.data.data[0])


            setName(student.name)
            setSurname(student.surname)
            setEmail(student.email)
            setImageUrl(student.photo)
        }
        
        fetchProfileStudent()
    }, 
    [
        student.name, 
        student.surname,
        student.email, 
        student.photo,
    ])



    const handleSelectImages = (event) => {
        if (!event.target.files) return;
    
        const selectedImages = event.target.files[0];
    
        setImage(selectedImages);

        const imageUrl =  window.URL.createObjectURL(selectedImages);
        
        setImageUrl(imageUrl)
    };

    async function handleSubmit(e){
        e.preventDefault()
        setLoading(true)

        if(
            name.trim().length < 1 ||
            email.trim().length < 1 ||
            surname.trim().length < 1 
        ){
            toast.error('Preencha todos os dados!')
            setLoading(false)
            return
        }

        if(!verifyName(name)){
            toast.error('O campo nome só pode ter no máximo 12 caracteres')
            setLoading(false)
            return
        }
        if(!verifySurname(surname)){ 
            toast.error('O campo sobrenome só pode ter no máximo 12 caracteres') 
            setLoading(false)
            return
        }

        if(!verifyEmailValid(email)){
            toast.error('Email Inválido!');
            setLoading(false)
            return
        }

        if(!verifyEmailLength(email)){
            toast.error('Email Inválido! Apenas pode haver 100 caracteres no máximo!');
            setLoading(false)
            return
        }


        if(student.email !== email){

            const checkEMail = await  api.post('/student/checkLogin/', {email})
            const { data } = checkEMail
            if(!data.sucess){

                toast.error('E-mail já cadastrado')
                setLoading(false)
                return
            }
        }

        
        const __data = {
            name: name.trim(),
            surname: surname.trim(),
            email: email.trim()
        }

        const response = await api.put(`/student/update/${getUserId()}`, __data )
        
        const { data } = response

        if(!data.sucess){
            toast.error('Erro ao atualizar os dados!')
            setLoading(false)
            return
        }


        if(image.length !== 0){
            const formData = new FormData();
            formData.append('student_photo', image)


            const response = await api.post(`/student/upload_profile/${getUserId()}`, formData)
            const  sucess = response.data.sucess
            if(!sucess){
                toast.error('Erro ao salvar imagem!')
                console.log(response.data.data)
                setLoading(false)
                return
            }
        }
        
        
        
         toast.success('Atualização feita com sucesso!', {
            autoClose: 2000,
         })

         setTimeout(()=>{
            push('/student/home')
         }, 2000)

         setLoading(false)
        
    }



    return(
        <div id="profile-student">
            <Header
                title="Meu Perfil"
                userName={ `${student.name } ${student.surname }` }
                img={ imageUrl }
            />
            
            <div className="profile-content">

                <div className="profile">
                    <div className="user">
                        <div className="user-image">
                            <div className="upload">
                               
                                <label htmlFor="upload-photo">
                                    <img src={ CameraIcon } alt=""/>
                                </label>
                            </div>

                            {
                            imageUrl ? (
                                    <img 
                                        className="profile-image-student" 
                                        src={ imageUrl }
                                        alt={name}
                                    />
                                ) : (
                                    <></>
                                ) 
                            }

                            <input 
                                type="file" 
                                name="photo"
                                id="upload-photo" 
                                onChange={handleSelectImages}
                                accept="image/png, image/jpeg"
                            />

                        </div>

                        <div className="name">
                            <h2>{ `${student.name } ${student.surname }` }</h2>
                        </div>
                        
                        <div className="subject-user">
                            <Subject name="Estudante" color="#9B51E0"/>
                        </div>
                    </div>
                </div>

            </div>
            <section className="form-content">
                <form 
                    onSubmit={ handleSubmit }
                >
                    <h2>Seus dados</h2>

                    <hr/>

                    <div className="row first-row">
                        <InputForm 
                            name="Nome"
                            value={ name ? name : '' }
                            onChange={ e => setName(e.target.value) }
                        />
                        <InputForm 
                            name="Sobrenome" 
                            value={ surname ? surname : '' }
                            onChange={ e => setSurname(e.target.value) }
                        />
                    </div>

                    <div className="row second-row">
                        <InputForm 
                            name="E-mail" 
                            type="email" 
                            value={ email ? email : '' }
                            onChange={ e => setEmail(e.target.value) }  
                        />
                    </div>

                    <div className="important-container">
                        <div className="important-menssage">
                            <img src={ ImportantIcon } alt=""/>
                            <h4>
                                Importante! <br/>
                                Preencha todos os dados corretamente
                            </h4>
                        </div>
                        <Button 
                            buttonName="Salvar cadastro"
                            loading={ loading }
                        />
                    </div>
                </form>
            </section>
        </div>
    )
}


export default ProfileStudent