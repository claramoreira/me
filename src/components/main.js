import React from 'react';
import {Switch, Route} from 'react-router-dom';

import landingPage from './landingPage';
import Contact from './contact';
import Projects from './projects/projects';
import Resume from './resume/resume';

const Main = () => (
    <Switch>
        <Route path ="/me" component={landingPage} />
        <Route path ="/contact" component={Contact} />
        <Route path ="/projects" component={Projects} />
        <Route path ="/resume" component={Resume} />
    </Switch>
)

export default Main;