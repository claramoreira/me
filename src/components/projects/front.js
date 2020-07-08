import React, {Component} from 'react';
import Project from './uniqueProject';

class Front extends Component {
    render(){
        return(
                <Project
                projectName="Personal Website"
                imgPath='url(https://github.com/claramoreira/me/blob/master/public/personalwebsite_project.png?raw=true) center / cover'
                description="My personal website created using ReactJS and MDL. It was my first completed project using React and I created it to help me introduce myself
                to the world. You will find all information about my projects, resume and contacts here."
                languages="JavaScript, HTML, CSS"
                frameworks="ReactJS"
                libraries="MDL"
                link_deploy_name="Website"
                link_deploy="https://claramoreira.github.io/me/"
                link_source_name="Github"
                link_source="https://github.com/claramoreira/me"
                />
        )
    }
}

export default Front;