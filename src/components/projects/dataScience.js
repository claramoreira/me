import React, {Component} from 'react';
import Project from './uniqueProject';

class DataScience extends Component {
    render(){
        return(
        
                <Project
                projectName="Titanic: Data Visualization"
                imgPath='/personalwebsite_project.png'
                description="Titanic: Data Visualization is a project created to better understand Kaggles' Titanic: Machine Learning from Disaster dataset."
                languages="Python"
                frameworks="None"
                libraries="Numpy, Pandas, Matplotlib, Seaborn and Plotly"
                link_deploy_name = "Kaggle"
                link_deploy="https://www.kaggle.com/claraljm/titanic-data-visualization"
                link_source_name = "Github"
                link_source = "https://github.com/claramoreira/me"
                />
        )
    }
}

export default DataScience;