import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
    align-items: center;
    justify-content: center;
    background-image: url("https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-size: cover;
    @media only screen and (max-width: 740px) {
        height: 300px;
    }
    @media only screen and (max-width: 420px) {
        height: 200px;
    }
    > h1 {
        color: white;
        font-size: 48px;
        margin: 0 20%;
        @media only screen and (max-width: 740px) {
            font-size: 36px;
        }
        @media only screen and (max-width: 420px) {
            font-size: 26px;
        }
    }
`;