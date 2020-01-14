import styled from 'styled-components';
export const Container = styled.div`
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.6); /* Black w/ opacity */
`;
export const Wrapper = styled.div`
    background-color: #fefefe;
    border: 1px solid #888;
    padding: 0 20px;
    border-radius: 5px;
    width: 450px; /* Could be more or less, depending on screen size */
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    display: flex;
    flex-direction: column;
    margin: 8% auto; /* Change between screen sizes */
    @media only screen and (max-width: 800px) {
        margin: 18% auto; 
    }
    @media only screen and (max-width: 550px) {
        margin: 25% auto; 
        width: 250px; 
    }

`;
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    > h1 {
        font-size: 24px;
    }
    > button {
        height: 24px;
        width: 24px;
    }
    @media only screen and (max-width: 550px) {
        margin-bottom: 24px;
    }
`
export const Actions = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #cbcbcb;
    margin-bottom: 24px;
    > button {
        margin-bottom: 24px;
        font-size: 24px;
        height: 48px;
        width: 48px;
        border: 1px solid red;
        border-radius: 50%;
    }
    .facebook {
        margin-left: 1rem;
        border: 1px solid #3b5998;
        color: #3b5998;
    }
    .google {
        margin-right: 1rem;
        border: 1px solid #DB4437;
        color: #DB4437;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    > input, > button {
        height: 32px;
        margin: 8px 60px;
        border-radius: 5px;
        @media only screen and (max-width: 550px) {
            margin: 8px 30px;
        }
    }
    > input {
        background: #cbcbcb;
        border: none;
        padding-left: 5px;
    }
    > button {
        background: #44dfe7;
        color: white;
        font-weight: bold;
    }
    > p {
        font-size: 14px;
        > button {
            color: #3b5998;
        }
    }
`