import styled from 'styled-components';
export const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin: 16px 1.45rem 16px 1.45rem;
    
    .my-masonry-grid {
        display: -webkit-box; /* Not needed if autoprefixing */
        display: -ms-flexbox; /* Not needed if autoprefixing */
        display: flex;
        margin-left: -1.45rem; /* gutter size offset */
        width: auto;
    }
    .my-masonry-grid_column {
        padding-left: 1.45rem; /* gutter size */
        background-clip: padding-box;
    }
        
    /* Style your items */
    .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
        background: grey;
        margin-bottom: 30px;
    }
`;