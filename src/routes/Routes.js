import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import LoginHelper from '../pages/LoginHelper';
import LoginStudent from '../pages/LoginStudent';
import RegisterHelper from '../pages/RegisterHelper';
import RegisterStudent from '../pages/RegisterStudent';
import HomeHelper from '../pages/HomeHelper';
import HomeStudent from '../pages/HomeStudent';
import ProfileHelper from '../pages/ProfileHelper';
import SubjectPage from '../pages/SubjectPage';
import SubjectVideos from '../pages/SubjectVideos';
import VideoPlayer from '../pages/VideoPlayer';
import ProfileStudent from '../pages/ProfileStudent';
import ListHelpers from '../pages/ListHelpers';
import Chat from '../pages/Chat';



import PrivateRoute from './PrivateRoute'

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Landing } />
                <Route path="/login-helper" exact component={ LoginHelper } />
                <Route path="/register-helper" exact component={ RegisterHelper } />
                <Route path="/login-student" exact component={ LoginStudent } />
                <Route path="/register-student" exact component={ RegisterStudent } />

                <PrivateRoute path="/helper/home" exact component={ HomeHelper } />
                <PrivateRoute path="/student/home" exact component={ HomeStudent } />
                <PrivateRoute path="/helper/profile" exact component={ ProfileHelper } />
                <PrivateRoute path="/student/profile" exact component={ ProfileStudent } />
                <PrivateRoute path="/student/list" exact component={ ListHelpers } />
                <PrivateRoute path="/subject/:subject" exact component={ SubjectPage } />
                <PrivateRoute path="/subject/:subject/:topic/videos" exact component={ SubjectVideos } />
                <PrivateRoute path="/subject/:subject/:topic/videos/:id" exact component={ VideoPlayer } />
                <PrivateRoute path="/chat/:type/:id" exact component={ Chat } />
            </Switch>
            
        </BrowserRouter>
    );
}   


export default Routes;