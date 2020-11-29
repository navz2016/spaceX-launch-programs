import React, { useState,useEffect } from 'react';
import FilterButton from './FilterButton';

const FlagFilter = props => {

    const data = ['true','false'];
    const [activeItem, setActiveItem] = useState(null);

    const getActiveFilterItem = () => {
        setActiveItem(props.query[props.type.name]);
    }

    const clearFilter = () => {
        props.applyFilter({
            'type': props.type.name,
            [props.type.name] : null
        }); 
        setActiveItem(null);
    }

    useEffect(() => {
        getActiveFilterItem();
    },[]);

    return(
        <div className="filter-item">
            <p className="filter-title">
                {props.type.displayName}
                {(activeItem && activeItem !== 'null') &&  
                    <button className="clear-filter" onClick={clearFilter}>Clear</button>
                }
            </p>
            <div className="filter-btn-grp-container">
                {data.map((item, index) => 
                    <FilterButton 
                    content={item}
                    key={index} 
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    {...props}/>  
                )}
            </div>
        </div>
    )
}

export default FlagFilter;