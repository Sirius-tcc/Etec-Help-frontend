import React, {useEffect, useState} from 'react'
import Header from '../../components/Header'
import Subject from '../../components/Subject'
import Classification from '../../components/Classification'
import InputForm from '../../components/InputForm'
import TextArea from '../../components/TextArea'
import CheckBox from '../../components/CheckBox'
import Button from '../../components/Button'
import CameraIcon from '../../assets/images/camera.svg'
import ImportantIcon from '../../assets/images/important.svg'
import { verifyEmailLength, verifyEmailValid, verifyName, verifySurname,verifyBio } from '../../scripts/ValidateData'

import { getUserId } from '../../scripts/getTokenData'
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom'
import api from '../../services/api'


import './styles.css'
import './responsive.css'

function ProfileHelper(){

    const [helper, setHelper] = useState({})

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [bio, setBio] = useState('')
    const [imageUrl, setImageUrl] = useState(null);
    
    const [image, setImage] = useState([])
    const [loading, setLoading] = useState(false)


    const [math, setMath] = useState(false)
    const [programming, setProgramming] = useState(false)

    useEffect(()=>{

        

        async function fechProfileHelper(){
            const id = getUserId()
            const response = await api.get(`/helper/show/${id}`)
    
            setHelper(response.data.data[0])

            setName(response.data.data[0].name)
            setSurname(response.data.data[0].surname)
            setEmail(response.data.data[0].email)
            setImageUrl(response.data.data[0].photo)
            setBio(!!response.data.data[0].bio ? response.data.data[0].bio :"")

            response.data.data[0].subjects.map(subject => {
                if(subject === "Matemática"){
                    setMath(true)
                }else if(subject === "Programação"){
                    setProgramming(true)
                }
                return null;
            })
            
            if(response.data.data[0].subjects[0] === null){
                toast.warn('Selecione pelo menos uma matéria para continuar!', { 
                    position : "top-center",
                })
            }
           
            
        }

        fechProfileHelper()
    },[])

    
    const { push } = useHistory()

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
        const __data = {
            name : name.trim(),
            surname : surname.trim(),
            email : email.trim(),
            bio : bio.trim(),
        }

        console.log(__data)


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


        if(helper.email !== email){

            const checkEMail = await  api.post('/helper/checkLogin/', {email})
            const { data } = checkEMail
            if(!data.sucess){

                toast.error('E-mail já cadastrado')
                setLoading(false)
                return
            }
        }


        if(!verifyBio(bio)){
            toast.error(`Biografia pode ter no máximo 300 caracteres. Você colocou ${bio.length} caracteres`)
            setLoading(false)
            return
        }
        

        if(!math && !programming){
            toast.error('Você tem que selecionar pelo menos uma matéria!')
            setLoading(false)
            return
        }

        
       

        const response = await api.put(`/helper/update/${getUserId()}`, __data )
        
        const { data } = response

        if(!data.sucess){
            toast.error('Erro ao atualizar os dados!')


            console.log(data)
            setLoading(false)
            return
        }

        if(image.length !== 0){
            const formData = new FormData();
            formData.append('helper_photo', image)

            const response = await api.post(`/helper/upload_profile/${getUserId()}`, formData)
            const  sucess = response.data.sucess
            if(!sucess){
                toast.error('Erro ao salvar imagem!')
                console.log(response.data.data)
                setLoading(false)
                return
            }
        }

        const math_data = { subject_code : 1 }
        const programming_data = { subject_code : 2 }

        
        if(math){
            const response = await api.post(`/helper/create_subject_helper/${getUserId()}`, math_data)
            const  sucess = response.data.sucess
            if(!sucess){
                toast.error('Erro ao atualizar matéria!')
                console.log(response.data.data)
                console.log(math_data)
                setLoading(false)
                return
            }
        }else{
            const response = await api.put(`/helper/delete_subject/${getUserId()}`, math_data)
            const  sucess = response.data.sucess
            if(!sucess){
                toast.error('Erro ao deletar matéria!')
                console.log(response.data.data)
                console.log(math_data)
                setLoading(false)
                return
            }
        }

        if(programming){
            const response = await api.post(`/helper/create_subject_helper/${getUserId()}`, programming_data)
            const  sucess = response.data.sucess
            if(!sucess){
                toast.error('Erro ao atualizar matéria!')
                console.log(response.data.data)
                console.log(programming_data)
                setLoading(false)
                return
            }
        }else{
            const response = await api.put(`/helper/delete_subject/${getUserId()}`, programming_data)
            const  sucess = response.data.sucess
            if(!sucess){
                toast.error('Erro ao deletar matéria!')
                console.log(response.data.data)
                console.log(programming_data)
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
        <div id="profile-helper">
            <Header
                title="Meu Perfil"
                to="/helper/home"
                userName={ helper.name && helper.surname ?`${ helper.name } ${ helper.surname }` : '' }
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
                                        alt={helper.name}
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
                            <h2>{helper.name && helper.surname ?`${ helper.name } ${ helper.surname }` : ''  }</h2>
                        </div>
                        
                        <div className="subject-user">
                            {
                               !!helper.subjects && (
                                    helper.subjects.map( (subject, index) =>(
                                        <Subject 
                                            key={index}
                                            name={subject}
                                            circleWidth="12px"
                                        />
                                    )))        
                            }
                           
                        </div>

                        <div className="classification">
                            <Classification classification={ helper.classification }/>
                        </div>

                    </div>

                    
                </div>

            </div>
            <section className="form-content">
                <form onSubmit={ handleSubmit }>
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
                            value={ surname }
                            onChange={ e => setSurname(e.target.value) }
                        />
                    </div>

                    <div className="row second-row">
                        <InputForm
                            name="E-mail"
                            value={ email ? email : ''}
                            onChange={ e => setEmail(e.target.value) }
                        />
                    </div>
                    
                    <div className="row second-row">
                        <TextArea
                            name="Biografia"
                            value={ bio ? bio : '' }
                            onChange={ e => {
                                setBio(e.target.value)
                            }}
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
                                <CheckBox 
                                    isChecked={ math }
                                    onChange={ () => {} }
                                    onClick={()=>{setMath(!math)}}
                                />
                                <h4>Matemática</h4>
                            </div>

                            <div className="subject">
                                <CheckBox
                                    isChecked={ programming }
                                    onChange={ () => {} }
                                    onClick={()=>{setProgramming(!programming)}}
                                />
                                <h4>Programação</h4>
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


export default ProfileHelper