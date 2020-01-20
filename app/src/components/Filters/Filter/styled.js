import styled from 'styled-components';
export const Wrapper = styled.div`
    cursor: pointer;
    font-size: 12px;
    border-radius: 18px;
    padding: 0.5rem;
    margin-right: 1rem;
    -webkit-user-select: none;  /* Chrome all / Safari all */
    -moz-user-select: none;     /* Firefox all */
    -ms-user-select: none;      /* IE 10+ */
    user-select: none;
    
    @media only screen and (max-width: 740px) {
        font-size: 12px;
    }
    @media only screen and (max-width: 420px) {
        font-size: 10px;
        padding: 0.5rem;
        margin-right: 0.5rem;
    }
`;