import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                            src={process.env.PUBLIC_URL + '/me.png'}
                            alt="avatar"
                            style={{height: '300px'}}
                            />
                        </div>
                        <h2 style={{fontFamily: 'yesteryear', textAlign: 'center', fontSize: '60px'}}>Clara Moreira</h2>
                        <h4 style={{color: 'grey'}}>Data Scientist | Software Engineer</h4>
                        <hr style={{borderTop: '3px solid #888', width: '50%'}}/>
                        <p>I'm a Data Science enthusiast.</p>
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
                        courseName="Electronical and Telecomunication Egineering (MS)"
                        schoolName="Pontifícial Universidade Católica (PUC Minas)"
                        
                        />

                        <Education
                        startYear={2019}
                        endYear={2020}
                        courseName="Artificial Inteligence and Machine Learning (Specialization)"
                        schoolName="Pontifícial Universidade Católica (PUC Minas)"
                        />

                        <Education
                        startYear={2019}
                        endYear={2020}
                        courseName="Software Engineering (Specialization)"
                        schoolName="Pontifícial Universidade Católica (PUC Minas)"
                        />
                        
                        <hr style={{borderTop: '1px solid #fff'}}/>
                        <h2>Experience</h2>

                        <Experience
                        startYear={2019}
                        endYear={2020}
                        jobName="QA Analyst"
                        companyName="Hexing"
                        jobDescription="I was responsible for software testing and documentation at Hexing. The main tools used for software testing were Selenium 
                        and SoapUI. Meanwhile, the team used Gitlab and Sphinx to build documentation to guide the user through instaling, using and maintaining the 
                        MDC system. At times, I performed data analysis using Python libraries such as Pandas, NumPY and Matplotlib. At Hexing, I had a real experience
                        using Scrum methodology."
                        />

                        <Experience
                        startYear={2018}
                        endYear={2018}
                        jobName="Relationship Analyst Intern"
                        companyName="Y3 Gestão em Telecomunicações"
                        jobDescription="As a Relationship Analyst, I dealt with the customers (10-1000 employees companies) daily and intermediate the communication 
                        etween the telecommunication services provider and our costumers. I made several data analysis using the costumers' smartphone usage to better 
                        fit their needs to the provider offers. "
                        />

                        <Experience
                        startYear={2016}
                        endYear={2017}
                        jobName="Data Analyst Intern"
                        companyName="Oi SA"
                        jobDescription="At Oi SA I had my first contact with large databases and with data management tools when working with the corporative sector of 
                        the company. I used to manage MSSQL Server and MySQL databases to provide business intel for costumer success of Oi biggest costumers. I made VBA 
                        macros to automate report generation and integration with SQL databases. I developed webpages to provide internal information at real-time using 
                        Apache WebServer, PHP, HTML and CSS. "
                        />

                    <hr style={{borderTop: '1px solid #fff'}}/>
                    <h2>Skills</h2>

                        <Skills
                            skills="Python"
                            progress={50}
                        />

                        <Skills
                            skills="R"
                            progress={30}
                        />

                        <Skills
                            skills="Hadoop"
                            progress={20}
                        />

                        <Skills
                            skills="Hive"
                            progress={20}
                        />

                        <Skills
                            skills="Apache Sparks"
                            progress={20}
                        />

                        <Skills
                            skills="MySQL"
                            progress={80}
                        />

                        <Skills
                            skills="MSSQL Server"
                            progress={80}
                        />

                        <Skills
                            skills="C"
                            progress={80}
                        />

                        <Skills
                            skills="JavaScript"
                            progress={80}
                        />

                        <Skills
                            skills="HTML"
                            progress={95}
                        />

                        <Skills
                            skills="CSS"
                            progress={95}
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;