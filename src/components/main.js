import React from 'react';
import {Switch, Route} from 'react-router-dom';

import landingPage from './landingPage';
import aboutMe from './aboutMe';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path ="/me" component={landingPage} />
        <Route path ="/aboutMe" component={aboutMe} />
        <Route path ="/contact" component={Contact} />
        <Route path ="/projects" component={Projects} />
        <Route path ="/resume" component={Resume} />
    </Switch>
)

export default Main;