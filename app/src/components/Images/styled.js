import styled from 'styled-components';
export const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin: 16px calc(10% - 1.45rem) 16px 10%;
    
    > :nth-child(3n + 1) { order: 1; } /* 1st column */
    > :nth-child(3n + 2) { order: 2; } /* 2nd column */
    > :nth-child(3n + 3) { order: 3; } /* 3rd column */
    > :nth-child(-n + 3) {
        page-break-before: always; /* CSS 2.1 syntax */
        break-before: always;  /* New syntax */
    }
    @media only screen and (max-width: 740px) {
        margin: 16px calc(5% - 1.45rem) 16px 5%;
    }
`;