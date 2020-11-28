import React, { useState,useEffect } from 'react';
import FilterButton from './FilterButton';

const FlagFilter = props => {

    const data = ['true','false'];
    const [activeItem, setActiveItem] = useState(null);

    let getActiveFilterItem = () => {
        setActiveItem(props.query[props.type.name]);
    }

    useEffect(() => {
        getActiveFilterItem();
    },[activeItem]);

    return(
        <div className="filter-item">
            <p>{props.type.displayName}</p>
            <hr />
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