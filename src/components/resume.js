import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './resume/education';
import Experience from './resume/experience';
import Skills from './resume/skills';


class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                            src="https://www.shareicon.net/data/128x128/2017/07/13/888381_globe_512x512.png"
                            alt="avatar"
                            style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Clara Moreira</h2>
                        <h4 style={{color: 'grey'}}>Data Scientist</h4>
                        <hr style={{borderTop: '3px solid #888', width: '50%'}}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. 
                        Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
                        turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis 
                        ut adipiscing</p>
                        <hr style={{borderTop: '3px solid #888', width: '50%'}}/>
                        <h5>City:</h5>
                        <p>Belo Horizonte - MG</p>
                        <h5>E-mail:</h5>
                        <p>clara_ljm@hotmail.com</p>
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education
                        startYear={2014}
                        endYear={2018}
                        schoolName="PUC Minas"
                        schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. 
                        Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
                        turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis 
                        ut adipiscing"
                        />

                        <Education
                        startYear={2014}
                        endYear={2018}
                        schoolName="PUC Minas"
                        schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. 
                        Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
                        turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis 
                        ut adipiscing"
                        />
                        
                        <hr style={{borderTop: '3px solid #fff'}}/>
                        <h2>Experience</h2>

                        <Experience
                        startYear={2014}
                        endYear={2018}
                        jobName="First Job"
                        jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. 
                        Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
                        turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis 
                        ut adipiscing"
                        />

                        <Experience
                        startYear={2014}
                        endYear={2018}
                        jobName="Second Job"
                        jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. 
                        Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
                        turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis 
                        ut adipiscing"
                        />

                    <hr style={{borderTop: '3px solid #fff'}}/>
                    <h2>Skills</h2>

                        <Skills
                            skills="javascript"
                            progress={100}
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;