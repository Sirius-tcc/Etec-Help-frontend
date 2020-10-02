import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import LoginHelper from './pages/LoginHelper';
import LoginStudent from './pages/LoginStudent';
import RegisterHelper from './pages/RegisterHelper';
import RegisterStudent from './pages/RegisterStudent';
import HomeHelper from './pages/HomeHelper';



function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={ Landing } />
            <Route path="/login-helper" exact component={ LoginHelper } />
            <Route path="/register-helper" exact component={ RegisterHelper } />
            <Route path="/login-student" exact component={ LoginStudent } />
            <Route path="/register-student" exact component={ RegisterStudent } />
            <Route path="/helper/home" exact component={ HomeHelper } />
        </BrowserRouter>
    );
}   


export default Routes;