import React from 'react';
import {Switch, Route} from 'react-router-dom';

import landingPage from './landingPage';
import Contact from './contact';
import Projects from './projects/projects';
import Resume from './resume/resume';

const Main = () => (
    <Switch>
        <Route exact path ={process.env.PUBLIC_URL + '/'} component={landingPage} />
        <Route path ={process.env.PUBLIC_URL + '/contact'} component={Contact} />
        <Route path ={process.env.PUBLIC_URL + '/projects'} component={Projects} />
        <Route path ={process.env.PUBLIC_URL + '/resume'} component={Resume} />
    </Switch>
)

export default Main;