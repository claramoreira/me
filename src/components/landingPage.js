import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';

class landingPage extends Component {
    render(){
        return(
            <div style={{width: '100%', height:'80%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                        src="https://cdn.icon-icons.com/icons2/1371/PNG/512/robot02_90810.png"
                        alt="avatar"
                        className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Data Scientist</h1>
                            <hr/>
                            <p>Data Analysis | Machine Learning</p>

                            <div className="social-links">
                                
                                {/* LinkedIn*/}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                {/* LinkedIn*/}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>

                                {/* LinkedIn*/}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-kaggle" aria-hidden="true"/>
                                </a>
                                
                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default landingPage;