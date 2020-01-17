import React, {useState} from 'react'
import Filter from './Filter';
import { Wrapper, AddButton } from './styled';
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
        <p>Sorted by:</p>
        <p></p> 
        {updatedFilters.map((filter, i) => {
            return <Filter onfilterClicked={handleFitlerClick} key={i} text={filter.text} selected={filter.selected}/>
        })}
        <AddButton><i class="fas fa-plus"></i></AddButton>
    </Wrapper>    
)};

export default Filters;