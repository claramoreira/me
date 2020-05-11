import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends Component {
    render(){
        return(
            <Grid>
                <Cell col={2}>
                    <p style={{fontWeight: 'bold'}}>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={10}>
                    <h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4>
                    <hr/>
                    <div className="school-name" style={{fontWeight: 'none', fontSize: '16px', paddingBottom: '2%'}}>{this.props.companyName}</div>
                    <p style={{textAlign: 'justify'}}>{this.props.jobDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;