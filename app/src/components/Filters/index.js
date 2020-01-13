import React from 'react'
import Filter from './Filter';
import { Wrapper } from './styled';

const Filters = ({filters}) => (
    <Wrapper>
        {filters.map((filter, i) => {
            return <Filter key={i} text={filter}/>
        })}
    </Wrapper>    
);

export default Filters;