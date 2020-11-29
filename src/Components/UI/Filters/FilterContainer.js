import React from 'react';
import FilterItem from './FilterItem';
import './Filters.css';

const FilterContainer = props => {

    const FILTER_TYPES= [
        {'name': 'launch_year', 'displayName': 'Launch Year', 'minRange': 2006}, 
        {'name': 'launch_success', 'displayName': 'Successful Launch'},
        {'name': 'land_success', 'displayName': 'Successful Landing'} 
    ];

    return(
        <div  className="filter-container">
            <h2 className="mar-0">Filters</h2>
                {FILTER_TYPES.map((type, index) => 
                    <FilterItem key={index} type={type} {...props} />
                )}
        </div>
    )
}

export default FilterContainer;