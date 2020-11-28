import React from 'react';
import Program from './Program';
import './Programs.css';

const ProgramList = props => {
    return(
        <React.Fragment>
            {props.programs.map((prog, index) => 
                <Program content={prog} key={index} />
            )}
        </React.Fragment>
    )
}

export default ProgramList;
