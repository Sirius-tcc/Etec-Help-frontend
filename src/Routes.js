import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import LoginHelper from './pages/LoginHelper';
import LoginStudent from './pages/LoginStudent';
import RegisterHelper from './pages/RegisterHelper';
import RegisterStudent from './pages/RegisterStudent';
import HomeHelper from './pages/HomeHelper';
import ProfileHelper from './pages/ProfileHelper';
import SubjectPage from './pages/SubjectPage';
import SubjectVideos from './pages/SubjectVideos';



function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={ Landing } />
            <Route path="/login-helper" exact component={ LoginHelper } />
            <Route path="/register-helper" exact component={ RegisterHelper } />
            <Route path="/login-student" exact component={ LoginStudent } />
            <Route path="/register-student" exact component={ RegisterStudent } />
            <Route path="/helper/home" exact component={ HomeHelper } />
            <Route path="/helper/profile" exact component={ ProfileHelper } />
            <Route path="/subject/:subject" exact component={ SubjectPage } />
            <Route path="/subject/:subject/:topic/videos" exact component={ SubjectVideos } />
        </BrowserRouter>
    );
}   


export default Routes;