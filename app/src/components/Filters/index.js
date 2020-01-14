import React, {useState} from 'react'
import Filter from './Filter';
import { Wrapper } from './styled';

const Filters = ({filters}) => {
    const [updatedFilters, setUpdatedFilters] = useState(filters)
    const handleFitlerClick = (text) => {
        
        setUpdatedFilters(filters.map(filter => {
            filter.selected = false;
            if(filter.text === text) {
                filter.selected = true
            }
            return filter;
        }));
    }
    return(
    <Wrapper>
        {updatedFilters.map((filter, i) => {
            return <Filter onfilterClicked={handleFitlerClick} key={i} text={filter.text} selected={filter.selected}/>
        })}
    </Wrapper>    
)};

export default Filters;