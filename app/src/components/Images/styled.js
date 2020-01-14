import styled from 'styled-components';
export const Container = styled.div`
    display: flex;
    margin: 16px calc(10% - 1.45rem) 16px 10%;
    flex-wrap: wrap;
    @media only screen and (max-width: 740px) {
        margin: 16px calc(5% - 1.45rem) 16px 5%;
    }
`;