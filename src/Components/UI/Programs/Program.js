import React from 'react';
import ProgramImg from './ProgramImg';
import ProgramInfo from './ProgramInfo';

const Program = React.memo(props => {
    return(
        <div className="grid-item-program">
            <div className="program-container">
                <div className="img-container">
                    <ProgramImg content={props.content}/>
                </div>
                <div className="program-details">
                    {/* <ProgramInfo info={props.content}/> */}
                    <p className="launch-name">{props.content.mission_name}  #{props.content.flight_number}</p>
                    <ProgramInfo value={props.content.mission_id} label="Mission Ids" />
                    <ProgramInfo value={props.content.launch_year} label="Launch Year" />
                    <ProgramInfo value={props.content.launch_success} label="Successful Launch" />
                    <ProgramInfo value={props.content.landing_success} label="Successful Landing" />
                </div>
            </div>
        </div>
    )
})

export default Program;