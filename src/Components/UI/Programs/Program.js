import React from 'react';
import ProgramImg from './ProgramImg';
import ProgramInfo from './ProgramInfo';

const Program = props => {
    return(
        <div className="grid-item-program">
            <div className="program-container">
                <div className="img-container">
                    <ProgramImg content={props.content}/>
                </div>
                <ProgramInfo info={props.content}/>
            </div>
        </div>
    )
}

export default Program;