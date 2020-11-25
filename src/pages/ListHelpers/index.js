import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import HeaderBottom from '../../components/HeaderBottom'
import Select from '../../components/Select'
import HelperItem from '../../components/HelperItem'
import api from '../../services/api'

import './styles.css'
import './responsive.css'
import { toast } from 'react-toastify'

function ListHelpers(){
    const [ helpers, setHelpers ] = useState([])

    useEffect(()=>{
        async function fetchHelperList(){
            const res = await api.get(`/helper/list`)

            const data = res.data

            if(data.sucess){
                setHelpers(data.data)
            }else{
                toast.error('Erro ao listar helpers')
                console.log(data.data)
            }

        }

        fetchHelperList()
    }, [])

    async function fetchHelperBySubject(subject){
        const res = await api.get(`/helper/list?subject=${subject}`)

            const data = res.data

            if(data.sucess){
                setHelpers(data.data)
            }else{
                toast.error('Erro ao listar helpers')
                console.log(data.data)
            }
    }

    return(
        <div id="list-hepers">
            <div >
                <Header to="/student/home" title="Lista de Helpers"/> 

                <HeaderBottom title="Estes são os helpers disponíveis." subtitle={`Total de ${helpers.length} helpers`}>
                    <div className="filter-subject">
                        <Select 
                            name="Filtrar por matéria"
                            options={['Matemática', 'Programação'] }
                            onClick={ (e)=>{
                                const subject = e.target.value 
                                fetchHelperBySubject(subject)
                            }}
                        />
                    </div>
                </HeaderBottom> 

                <div className="list-helpers-containers">

                    {
                        helpers.map( helper => (
                            <HelperItem
                                id={ helper.code  } 
                                key={ helper.code }
                                image = { helper.photo }
                                name={`${helper.name} ${helper.surname}`}
                                subjects = {helper.subjects}
                                classification={ helper.classification }
                                bio = { helper.bio }
                                givenHelpers = { helper.helps }
                            />
                        ))
                    }
                    

                    
                </div>
            </div>

            <h6 className="results">
                Estes são todos os resultados
            </h6>
        </div>
    )
}

export default ListHelpers