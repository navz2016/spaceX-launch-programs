import React from 'react';
import './Filters.css';

const FilterButton = React.memo(props  => {

    function applyFilter() {
        props.applyFilter({
            'type': props.type.name,
            [props.type.name]: props.content
        }); 
        props.setActiveItem(props.content);
    }

    return(
        <button 
            name={props.content}
            className={props.content == props.activeItem ? 'filter-btn btn-active' : 'filter-btn'}
            value={props.content}
            onClick={() => props.content != props.activeItem && applyFilter() }>
            {props.content}
        </button>
    )
})

export default FilterButton;