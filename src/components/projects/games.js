import React, {Component} from 'react';
import Project from './uniqueProject';

class Games extends Component {
    render(){
        return(
        
                <Project
                projectName="Adora's Adventure"
                imgPath='/personalwebsite_project.png'
                description="Adora's Adventure is a P5.js based project created after following Alura's GameDev week (#imersaoGameDev). It was based on She-Ra: Princesses of Power
                            cartoon and it was my first contact with game development using JS. The game assets and the game code were developed by me."
                link_deploy_name = "Kaggle"
                link_deploy="https://claramoreira.github.io/me/"
                link_source_name = "Github"
                link_source ="https://github.com/claramoreira/me"
                />
        )
    }
}

export default Games;