import React, {Component} from 'react';
import Project from './uniqueProject';

class Front extends Component {
    render(){
        return(
        
                <Project
                projectName="Teste1"
                imgPath='/personalwebsite_project.png'
                description="testestetestes"
                link1="xxxx"
                link2="yyyy"
                />
        )
    }
}

export default Front;