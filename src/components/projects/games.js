import React, {Component} from 'react';
import Project from './uniqueProject';

class Games extends Component {
    render(){
        return(
                <Project
                projectName="Adora's Adventure"
                imgPath='url(https://github.com/claramoreira/me/blob/master/public/adoras_adventure.png?raw=true) center / cover'
                description="Adora's Adventure is a P5.js based project created after following Alura's GameDev week (#imersaoGameDev). It was based on She-Ra: Princesses of Power
                            cartoon and it was my first contact with game development using JS. The game assets and the game code were developed by me."
                languages="JavaScript, CSS, HTML"
                frameworks="None"
                libraries="P5"
                link_deploy_name = "Game"
                link_deploy="https://claramoreira.github.io/p5_adoras/"
                link_source_name = "Github"
                link_source ="https://github.com/claramoreira/p5_adoras"
                />
        )
    }
}

export default Games;