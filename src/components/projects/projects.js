import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell} from 'react-mdl';
import Front from './front';
import DataScience from './dataScience';
import Games from './games';

class Projects extends Component {
    
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories(){

        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    <Front/>
                </div>
            )
        }
        /*Machine Learning*/
        else if(this.state.activeTab === 1){
            return (
                <div className="projects-grid">
                    <DataScience/>
                </div>
            )
        }
        /*Other tabs*/
        else if(this.state.activeTab === 2){
            return (
                <div className="projects-grid">
                    <Games/>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Front-end Development</Tab>
                    <Tab>Data Science</Tab>
                    <Tab>Games</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}

export default Projects;