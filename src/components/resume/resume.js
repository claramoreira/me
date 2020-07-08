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
                    <Cell col={3}>
                        <div style={{textAlign: 'center'}}>
                            <img
                            src={process.env.PUBLIC_URL + '/me.png'}
                            alt="avatar"
                            style={{height: '300px', borderRadius: '50%'}}
                            />
                        </div>
                        <h2 style={{fontFamily: 'yesteryear', textAlign: 'center', fontSize: '3em'}}>Clara Moreira</h2>
                        <h4 style={{color: 'grey', textAlign: 'center', fontSize: '1.5em'}}>Programmer | Software Engineer</h4>
                        <hr style={{borderTop: '2px solid #DBD4B4', width: '100%'}}/>
                        <p style={{textAlign: 'justify'}}>Hello! My name is Clara and I'm {new Date().getFullYear() - 1995} years old. I'm a Software Engineer 
                        and programmer. I had the opportunity to develop web tools and perform database management professionally. My favorite languages are
                        Python (especially for Data Science) and JavaScript (for multiple porpuses).</p>
                    
                        <hr style={{borderTop: '2px solid #DBD4B4', width: '100%'}}/>
                        <h5>City:</h5>
                        <p>Belo Horizonte - MG</p>
                        <h5>E-mail:</h5>
                        <p>clara_ljm@hotmail.com</p>
                    </Cell>

                    <Cell className="resume-right-col" col={9}>
                        <h2>Education</h2>

                        <Education
                        startYear={2014}
                        endYear={2018}
                        courseName="Electronical and Telecomunication Engineering (MS)"
                        schoolName="Pontifícial Universidade Católica (PUC Minas)"
                        
                        />

                        <Education
                        startYear={2019}
                        endYear={2020}
                        courseName="Artificial Intelligence and Machine Learning (Specialization)"
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
                        startMonth="Dec"
                        startYear={2019}
                        endMonth="May"
                        endYear={2020}
                        jobName="QA Analyst"
                        companyName="Hexing Brasil"
                        jobDescription="I was responsible for software testing and documentation at Hexing. The main tools used for software testing were Selenium 
                        and SoapUI. Meanwhile, the team used Gitlab for version control and Sphinx to build documentation to guide the user through instaling, using and 
                        maintaining the MDC system. At times, I performed data analysis using Python libraries such as Pandas, NumPY and Matplotlib. At Hexing, I had a 
                        real experience using Scrum methodology on a daily basis."
                        />

                        <Experience
                        startMonth="Jan"
                        startYear={2018}
                        endMonth="Dec"
                        endYear={2018}
                        jobName="Relationship Analyst Intern"
                        companyName="Y3 Gestão em Telecomunicações"
                        jobDescription="As a Relationship Analyst, I dealt with the customers from small and big companies daily and intermediate the communication 
                        between them and the telecommunication services provider. I made several data analysis using the costumers' smartphone usage to better 
                        fit their needs to the provider offers."
                        />

                        <Experience
                        startMonth="May"
                        startYear={2016}
                        endMonth="Sept"
                        endYear={2017}
                        jobName="Data Analyst Intern"
                        companyName="Oi SA"
                        jobDescription="At Oi SA I had my first contact with large databases and with data management tools when working with the corporative sector of 
                        the company. I used to manage MSSQL Server and MySQL databases to provide business intel for customer success. I made VBA 
                        macros to automate report generation and integration with SQL databases. I developed webpages to provide real-time information using 
                        Apache WebServer, JavaScript PHP, HTML and CSS. "
                        />

                    <hr style={{borderTop: '1px solid #fff'}}/>
                    <h2>Major skills</h2>

                        <Skills
                            skills="JavaScript"
                            progress={90}
                        />

                        <Skills
                            skills="HTML"
                            progress={95}
                        />

                        <Skills
                            skills="CSS"
                            progress={95}

                        />

                        <Skills
                            skills="Python"
                            progress={85}
                        />


                        <Skills
                            skills="SQL"
                            progress={85}
                        />



                    <h2>Other skills</h2>

                        <Skills
                            skills="Microsoft Office"
                            progress={100}
                        />

                        <Skills
                            skills="C"
                            progress={90}
                        />

                        <Skills
                            skills="C#"
                            progress={90}
                        />

                        <Skills
                            skills="ReactJS"
                            progress={70}
                        />

                        <Skills
                            skills="Node.js"
                            progress={70}
                        />
                        
                        <Skills
                            skills="R"
                            progress={50}
                            />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;