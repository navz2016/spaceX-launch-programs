import React from 'react';
import LazyImg from '../../Custom/LazyImage';

const ProgramImg = React.memo(props => {
    return(
        <figure className="res-img-container">     
            <LazyImg src={props.content.links.mission_patch_small} alt={props.content.mission_name} />
        </figure>
    )
})

export default ProgramImg;