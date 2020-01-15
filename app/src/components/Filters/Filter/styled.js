import styled from 'styled-components';
export const Wrapper = styled.div`
    cursor: pointer;
    font-size: 16px;
    border-radius: 18px;
    padding: 6px;
    margin-right: 1rem;
    -webkit-user-select: none;  /* Chrome all / Safari all */
    -moz-user-select: none;     /* Firefox all */
    -ms-user-select: none;      /* IE 10+ */
    user-select: none; 
    @media only screen and (max-width: 740px) {
        font-size: 14px;
    }
    @media only screen and (max-width: 420px) {
        font-size: 12px;
    }
`;