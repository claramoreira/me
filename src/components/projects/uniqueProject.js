import React, {Component} from 'react';
import {Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

class Project extends Component {
    render(){
        return(
        
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    
                    <CardTitle style={{color:'#fff', height: '176px', background: this.props.imgPath}}>
                       {this.props.projectName}
                    </CardTitle>
                    <CardText style={{textAlign:'justify'}}>
                        {this.props.description}
                    </CardText>

                    <CardText>
                        Frameworks: {this.props.frameworks}
                    </CardText>

                    <CardText>
                        Languages: {this.props.languages}
                    </CardText>
                    
                    <CardText>
                        Libraries: {this.props.libraries}
                    </CardText>

                    <CardActions border>
                        <a href={this.props.link_deploy}>
                            <Button colored>{this.props.link_deploy_name}</Button>
                        </a>
                        <a href={this.props.link_source}>
                            <Button colored>{this.props.link_source_name}</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{color:'#000'}}>
                        <a href={this.props.link_deploy}>
                            <IconButton name="check"/>
                        </a>
                    </CardMenu>
                </Card>
            
        )
    }
}

export default Project;