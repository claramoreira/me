import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">  
                    <Cell col={6}>
                        <div className="contact-canvas">
                            <h2 style={{fontFamily: 'yesteryear', fontSize: '6em'}}>Clara Moreira</h2>
                            <p style={{textAlign: 'justify', margin: 'auto', paddingTop: '2em'}}>
                            Hi! If you have any interest in talking about any of my projects, please contact me. I'm interested in group projects, job opportunities and
                            exchanging experiences on programming, data science and game development. </p>
                        </div>
                    </Cell>
                    <Cell col={6}>
                        <div className="contact-canvas">
                            <h2>Contact Me</h2>
                            <hr/>
                            <div className="contact-list">
                                <List>
                                    <ListItem>
                                        <ListItemContent className="listDefault">
                                            <i className="fa fa-envelope" aria-hidden="true"/>
                                            clara_ljm@hotmail.com
                                        </ListItemContent>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemContent className="listDefault">
                                            <i className="fab fa-discord" aria-hidden="true"/>
                                            Clara#6557
                                        </ListItemContent>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemContent className="listDefault">
                                            <i className="fa fa-skype" aria-hidden="true"/>
                                            clara_ljm
                                        </ListItemContent>
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;