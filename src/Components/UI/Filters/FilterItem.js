import React from 'react';
import FlagFilter from './FlagFilter';
import YearFilter from './YearFilter';

const FilterType = props => {
    switch(props.type.name) { 
        case 'launch_year':
            return <YearFilter {...props}/>

        case 'launch_success':
        case 'land_success':
            return <FlagFilter {...props}/>

        default:
            return null;
    }
}

const FilterItem = props => {
    return(
        <div className="filters">
            { FilterType(props) }
        </div>
    )
}

export default FilterItem;
