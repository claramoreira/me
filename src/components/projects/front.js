import React, {Component} from 'react';
import Project from './uniqueProject';

class Front extends Component {
    render(){
        return(
        
                <Project
                projectName="Personal Website"
                imgPath='url(https://github.com/claramoreira/me/blob/master/public/personalwebsite_project.png?raw=true) center / cover'
                description="testestetestes"
                link_deploy_name="Website"
                link_deploy="https://claramoreira.github.io/me/"
                link_source_name="Github"
                link_source="https://github.com/claramoreira/me"
                />
        )
    }
}

export default Front;