import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import LoginHelper from './pages/LoginHelper';
import LoginStudent from './pages/LoginStudent';
import RegisterHelper from './pages/RegisterHelper';
import RegisterStudent from './pages/RegisterStudent';
import HomeHelper from './pages/HomeHelper';
import HomeStudent from './pages/HomeStudent';
import ProfileHelper from './pages/ProfileHelper';
import SubjectPage from './pages/SubjectPage';
import SubjectVideos from './pages/SubjectVideos';
import VideoPlayer from './pages/VideoPlayer';
import ProfileStudent from './pages/ProfileStudent';
import ListHelpers from './pages/ListHelpers';
import Chat from './pages/Chat';



function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Landing } />
                <Route path="/login-helper" exact component={ LoginHelper } />
                <Route path="/register-helper" exact component={ RegisterHelper } />
                <Route path="/login-student" exact component={ LoginStudent } />
                <Route path="/register-student" exact component={ RegisterStudent } />
                <Route path="/helper/home" exact component={ HomeHelper } />
                <Route path="/student/home" exact component={ HomeStudent } />
                <Route path="/helper/profile" exact component={ ProfileHelper } />
                <Route path="/student/profile" exact component={ ProfileStudent } />
                <Route path="/student/list" exact component={ ListHelpers } />
                <Route path="/subject/:subject" exact component={ SubjectPage } />
                <Route path="/subject/:subject/:topic/videos" exact component={ SubjectVideos } />
                <Route path="/subject/:subject/:topic/videos/:id" exact component={ VideoPlayer } />
                <Route path="/chat" exact component={ Chat } />
            </Switch>
            
        </BrowserRouter>
    );
}   


export default Routes;