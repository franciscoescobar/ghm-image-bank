import styled from 'styled-components';
export const Wrapper = styled.div`
    cursor: pointer;
    font-size: 16px;
    border-radius: 18px;
    padding: 6px;
    margin-right: 1rem;
    @media only screen and (max-width: 740px) {
        font-size: 14px;
    }
    @media only screen and (max-width: 420px) {
        font-size: 12px;
    }
`;