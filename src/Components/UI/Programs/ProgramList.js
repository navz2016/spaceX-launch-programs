import React from 'react';
import Program from './Program';
import './Programs.css';

const ProgramList = props => {
    return(
        <React.Fragment>
            {
                props.programs.length > 0 ?
                    props.programs.map((prog, index) => 
                    <Program content={prog} key={index} />
                )   :
                <h3 className="text-center mar-top-40">No Program found !</h3>
            }
        </React.Fragment>
    )
}

export default ProgramList;
