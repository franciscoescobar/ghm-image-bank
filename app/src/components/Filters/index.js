import React from 'react'
import Filter from './Filter';
import { Wrapper } from './styled';

const Filters = ({filters}) => (
    <Wrapper>
        {filters.map(filter => {
            return <Filter text={filter}/>
        })}
    </Wrapper>    
);

export default Filters;