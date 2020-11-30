import React from 'react';
import FilterItem from './FilterItem';
import './Filters.css';

const FilterContainer = props => {
    return(
        <div  className="filter-container">
            <h2 className="mar-0">Filters</h2>
                {props.FILTER_TYPES.map((type, index) => 
                    <FilterItem key={index} type={type} {...props} />
                )}
        </div>
    )
}

export default FilterContainer;