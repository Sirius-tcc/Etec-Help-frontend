import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import LoginHelper from './pages/LoginHelper';



function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={ Landing } />
            <Route path="/login-helper" exact component={ LoginHelper } />
        </BrowserRouter>
    );
}   


export default Routes;