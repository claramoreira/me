import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class landingPage extends Component {
    render(){
        return(
            <div style={{width: '100%', height:'80%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                        src={process.env.PUBLIC_URL + '/icon5.png'}
                        alt="avatar"
                        className="avatar-img"
                        style={{width: '10%', height: 'auto', paddingBottom:'2%'}}
                        />

                        <div className="banner-text">
                            <h1>Data Scientist</h1>
                            <hr/>
                            <p>Python | R | Hadoop | Hive | Spark | SQL</p>

                            <div className="social-links">
                                
                                {/* LinkedIn*/}
                                <a href="https://www.linkedin.com/in/clara-moreira-73b281132/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                {/* Github*/}
                                <a href="https://github.com/claramoreira" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>

                                {/* Kaggle*/}
                                <a href="https://www.kaggle.com/claraljm" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-kaggle" aria-hidden="true"/>
                                </a>

                                {/* Hacker  rank*/}
                                <a href="https://www.hackerrank.com/claramoreira" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-hackerrank" aria-hidden="true"/>
                                </a>
                                
                            </div>
                        </div>

                        <div className="icon-credits" style={{color:'white'}}>
                        Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>.
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default landingPage;