import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends Component {
    render(){
        return(
            <Grid>
                <Cell col={2}>
                    <p style={{fontWeight: 'bold'}}>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={10}>
                    <h5 style={{marginTop: '0px'}}>{this.props.courseName}</h5>
                    <hr/>
                    <div className="school-name" style={{fontWeight: 'none', fontSize: '16px', paddingBottom: '2%'}}>{this.props.schoolName}</div>
                    <p>{this.props.schoolDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Education;