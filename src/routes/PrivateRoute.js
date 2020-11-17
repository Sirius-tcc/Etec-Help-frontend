import React, {useEffect, useState} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getTypeUser } from '../scripts/getTokenData'
import api from '../services/api';



function PrivateRoute(props){
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

        const correctUser = VerifyTypeUser(props.path, token )

        if (!correctUser){
            return <Redirect to="/"/>
        }



        return validToken ? <Route { ...props } /> : <Redirect to="/"/>
    }
    
    return  <Redirect to="/"/>
}

function VerifyTypeUser(url) {
    const path  = url.split("/");

    const typeUser = path[1]
    if ( typeUser === "helper" || typeUser === "student"){

        if(typeUser === getTypeUser()){
            return true
        }else{
            return false
        }
    }
    
    return true
    
    
}

export default PrivateRoute