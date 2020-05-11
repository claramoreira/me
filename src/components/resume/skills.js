import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

class Skills extends Component {
    render(){
        return(
            <Grid>
                <Cell col={3}>
                    <div style={{display: 'flex', textAlign:'center'}}>
                        {this.props.skills} 
                    </div>
                </Cell>
                <Cell col={8}>
                    <div style={{verticalAlign: 'bottom'}}>
                        <ProgressBar style={{width: '100%'}}
                                     progress={this.props.progress}/>
                    </div>
                </Cell>

                <Cell col={1}>
                    <div>
                        {this.props.progress}%
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;