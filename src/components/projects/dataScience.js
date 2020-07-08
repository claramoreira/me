import React, {Component} from 'react';
import Project from './uniqueProject';

class DataScience extends Component {
    render(){
        return(
                <Project
                projectName="Titanic: Data Visualization"
                imgPath='url(https://github.com/claramoreira/me/blob/master/public/titanic_project.png?raw=true) center / cover'
                description="Titanic: Data Visualization is a project created to better understand Kaggles' Titanic: Machine Learning from Disaster dataset. I used this
                            project  as a foundation to apply machine learning algorithms on the following analysis."
                languages="Python"
                frameworks="None"
                libraries="Numpy, Pandas, Matplotlib, Seaborn and Plotly"
                link_deploy_name = "Kaggle"
                link_deploy="https://www.kaggle.com/claraljm/titanic-data-visualization"
                link_source_name = "Github"
                link_source = "https://github.com/claramoreira/titanicDataVisualization"
                />
        )
    }
}

export default DataScience;