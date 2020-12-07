import React, {useEffect, useState} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getTypeUser, getUserId } from '../scripts/getTokenData'
import api from '../services/api';
import ProfileHelper from '../pages/ProfileHelper';

function PrivateRoute(props){
    const token = localStorage.getItem('app-token')

    const isLogged = !!token
    
    const [validToken, setValidToken] = useState(true)
    const [subjectSeted, setSubjectSeted] = useState(true)

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

        if (validToken){
            const correctUser = VerifyTypeUser(props.path, token )

            if (!correctUser){
                return <Redirect to="/"/>
            }

            const path  = props.path.split("/");
            const typeUser = path[1]
            if(typeUser === "helper" && path[2] !== "profile"){
                api.get(`/helper/show/${getUserId()}`).then(res =>{
                    const data = res.data.data[0]
                    if(data.subjects[0] === null){
                        setSubjectSeted(false) 
                    }
                });

            }

            if(subjectSeted){
                return <Route { ...props } /> 

            }else{
                return <Route component={ ProfileHelper }/>
            }
            
        } 
        
    }
    return <Redirect to="/"/>
    
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