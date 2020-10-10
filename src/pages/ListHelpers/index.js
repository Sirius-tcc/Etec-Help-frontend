import React from 'react'
import Header from '../../components/Header'
import HeaderBottom from '../../components/HeaderBottom'
import Select from '../../components/Select'


import './styles.css'
import './responsive.css'

function ListHelpers(){
    
    return(
        <div id="list-hepers">
            <div >
                <Header to="/student/home" title="Lista de Helpers" userName="Beatriz Vitória"/> 

                <HeaderBottom title="Estes são os helpers disponíveis." subtitle="Total de 3 professores">


                    <div className="filter-subject">
                        <Select 
                            name="Filtrar por matéria"
                            options={['Matemática', 'Programação'] }
                        />
                    </div>
                    

                </HeaderBottom> 
            </div>
        </div>
    )
}

export default ListHelpers