import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Clara Moreira</h2>
                        <img
                        src="https://cdn4.iconfinder.com/data/icons/office-tools-24/88/Game_handle-512.png"
                        alt="avatar"
                        style={{height: '20%'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam 
                        nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis 
                        ut adipiscing</p>
                    </Cell>
                        
                    <Cell col={6}>
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
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;