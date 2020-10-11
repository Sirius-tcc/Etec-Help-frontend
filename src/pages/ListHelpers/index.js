import React from 'react'
import Header from '../../components/Header'
import HeaderBottom from '../../components/HeaderBottom'
import Select from '../../components/Select'
import HelperItem from '../../components/HelperItem'


import './styles.css'
import './responsive.css'

function ListHelpers(){
    
    return(
        <div id="list-hepers">
            <div >
                <Header to="/student/home" title="Lista de Helpers" userName="Beatriz Vitória"/> 

                <HeaderBottom title="Estes são os helpers disponíveis." subtitle="Total de 3 helpers">
                    <div className="filter-subject">
                        <Select 
                            name="Filtrar por matéria"
                            options={['Matemática', 'Programação'] }
                        />
                    </div>
                </HeaderBottom> 

                <div className="list-helpers-containers">
                    <HelperItem
                        image = "https://instagram.fcgh5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/80327591_516900248922332_5758360630541156352_n.jpg?_nc_ht=instagram.fcgh5-1.fna.fbcdn.net&_nc_ohc=8SO9RQu2K7gAX_M4UNx&oh=6cda5ef9f1fe81eb584ca96fde68c583&oe=5FAD445B"
                        name="Vitor Carmo"
                        subjects = {[ 
                            {subject: 'Matemática',  color:'#FCFF70'}, 
                            {subject: 'Programação', color:'#6BDC92'} 
                        ]}
                        classification={ 5 }
                        bio = "Olá! me chamo vitor, gosto de matemática, programação, hacking e hardware, manjo muito dos paranauê, porém, sou um pouco chato"
                        givenHelpers = { 11 }
                    />

                    <HelperItem
                        image = "https://instagram.fcgh5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/93925243_266840594483607_9092770538174021632_n.jpg?_nc_ht=instagram.fcgh5-1.fna.fbcdn.net&_nc_ohc=e4gkAgmLA30AX9mwAIk&oh=0565e75ef08e61b21cc9de41249e8009&oe=5FAEB7DD"
                        name="Rutieny Pires"
                        subjects = {[ 
                            {subject: 'Matemática',  color:'#FCFF70'}, 
                        ]}
                        classification={ 2 }
                        bio = "Eu sou ruim em matemática, nem sei o que eu estou fazendo aqui"
                        givenHelpers = { 1 }
                    />

                    <HelperItem
                        image = "https://instagram.fcgh5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/93612136_1084263421931848_6374034502976536576_n.jpg?_nc_ht=instagram.fcgh5-1.fna.fbcdn.net&_nc_ohc=JRUtgkMf4jEAX8Mnf-c&oh=3e40ea2584ee44204215a42cd83f18f1&oe=5FAB51D0"
                        name="Mateus Araujo"
                        subjects = {[ 
                            {subject: 'Programação', color:'#6BDC92'} 
                        ]}
                        classification={ 4 }
                        bio = "Manjo muito de programação e  lógica. Já alteirei um css de um framework inteiro na mão só por diversão, se quiser aprender lógica só entrar em contato"
                        givenHelpers = { 22 }
                    />

                </div>
            </div>

            <h6 className="results">
                Estes são todos os resultados
            </h6>
        </div>
    )
}

export default ListHelpers