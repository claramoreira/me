import React, {Component} from 'react';
import {Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

class Project extends Component {
    render(){
        return(
        
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'#000', height: '176px', background:
                    'url(D:\Projects\claramoreira.github.io\me\public) center / cover'}}>
                       {this.props.projectName}
                    </CardTitle>
                    <CardText>
                    {this.props.description}
                    </CardText>
                    <CardActions border>
                        <Button colored>{this.props.link1}</Button>
                        <Button colored>{this.props.link2}</Button>
                    </CardActions>
                    <CardMenu style={{color:'#000'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            
        )
    }
}

export default Project;