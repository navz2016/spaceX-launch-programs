import React from 'react';

const ProgramInfo = React.memo(props => {
    return(
        <div className="program-details">
            <p>{props.info.mission_name+' #'+props.info.flight_number}</p>
            {props.info.mission_id.length > 0 && 
                <p><strong>Mission Ids:</strong></p>
            }
            {props.info.mission_id.length > 0 && 
                <ul>
                    {props.info.mission_id.map((id, i) =>
                        <li key={i}>{id}</li>
                    )}
                </ul>
            }
            <p><strong>Launch Year: </strong>{props.info.launch_year}</p>
            <p><strong>Successful Launch: </strong>{props.info.launch_success ? 'true' : 'false'}</p>
            <p><strong>Successful Landing: </strong>{props.info.launch_success ? 'true' : 'false'}</p>           
        </div>
    )
})

export default ProgramInfo;