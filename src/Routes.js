import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import LoginHelper from './pages/LoginHelper';
import RegisterHelper from './pages/RegisterHelper';



function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={ Landing } />
            <Route path="/login-helper" exact component={ LoginHelper } />
            <Route path="/register-helper" exact component={ RegisterHelper } />
        </BrowserRouter>
    );
}   


export default Routes;