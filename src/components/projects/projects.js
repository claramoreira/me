import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';
import Front from './front';

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

                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#000', height: '176px', background: 
                    'url(https://www.pngitem.com/pimgs/m/300-3001952_artificial-intelligence-machine-learning-icon-hd-png-download.png) center / cover'}}>
                        Data Analysis Project
                    </CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi 
                    tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis 
                    ut adipiscing
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>Kaggle</Button>
                    </CardActions>
                    <CardMenu style={{color:'#000'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#000', height: '176px', background: 
                    'url(https://www.pngitem.com/pimgs/m/300-3001952_artificial-intelligence-machine-learning-icon-hd-png-download.png) center / cover'}}>
                        Data Analysis Project
                    </CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi 
                    tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis 
                    ut adipiscing
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>Kaggle</Button>
                    </CardActions>
                    <CardMenu style={{color:'#000'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#000', height: '176px', background: 
                    'url(https://www.pngitem.com/pimgs/m/300-3001952_artificial-intelligence-machine-learning-icon-hd-png-download.png) center / cover'}}>
                        Data Analysis Project
                    </CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi 
                    tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis 
                    ut adipiscing
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>Kaggle</Button>
                    </CardActions>
                    <CardMenu style={{color:'#000'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

            </div>
            )
        }
        /*Other tabs*/
        else if(this.state.activeTab === 2){
            return (
                <div className="projects-grid">

                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#000', height: '176px', background: 
                    'url(https://www.pngitem.com/pimgs/m/300-3001952_artificial-intelligence-machine-learning-icon-hd-png-download.png) center / cover'}}>
                        Data Analysis Project
                    </CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi 
                    tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis 
                    ut adipiscing
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>Kaggle</Button>
                    </CardActions>
                    <CardMenu style={{color:'#000'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#000', height: '176px', background: 
                    'url(https://www.pngitem.com/pimgs/m/300-3001952_artificial-intelligence-machine-learning-icon-hd-png-download.png) center / cover'}}>
                        Data Analysis Project
                    </CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi 
                    tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis 
                    ut adipiscing
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>Kaggle</Button>
                    </CardActions>
                    <CardMenu style={{color:'#000'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#000', height: '176px', background: 
                    'url(https://www.pngitem.com/pimgs/m/300-3001952_artificial-intelligence-machine-learning-icon-hd-png-download.png) center / cover'}}>
                        Data Analysis Project
                    </CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi 
                    tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis 
                    ut adipiscing
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>Kaggle</Button>
                    </CardActions>
                    <CardMenu style={{color:'#000'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

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
                    <Tab>Others</Tab>
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