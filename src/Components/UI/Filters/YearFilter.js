import React, { useEffect, useState } from 'react';
import FilterButton from './FilterButton';

const YearFilter = props => {

    const data = new Array((new Date().getFullYear() - (props.type.minRange-1))).fill().map((a, i) => +(props.type.minRange) + i);
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

export default YearFilter;