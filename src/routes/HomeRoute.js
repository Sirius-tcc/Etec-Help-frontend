import React, {useEffect, useState} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getTypeUser } from '../scripts/getTokenData'
import api from '../services/api';



function HomeRoute(props){
    const token = localStorage.getItem('app-token')

    const isLogged = !!token
    
    const [validToken, setValidToken] = useState(true)

    
    useEffect(() => {
        api.get(
            '/auth/checkAuth', 
                { headers: 
                    {
                        "Authorization" : `bearer ${token}`
                    } 
                }
        ).then(res =>{
            const { data } = res.data
            setValidToken(data)
        });
    });


    if (isLogged) {
        return validToken ?  <Redirect to={`/${getTypeUser()}/home`}/> : <Route { ...props } />
    }
    
    return  <Route { ...props } />
}


export default HomeRoute