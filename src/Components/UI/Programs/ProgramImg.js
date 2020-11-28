import React from 'react';

const ProgramImg = React.memo(props => {
    return(
        <div className="res-img-container">     
            <img src={props.content.links.mission_patch_small} alt={props.content.mission_name} />
        </div>
    )
})

export default ProgramImg;