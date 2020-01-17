import styled from 'styled-components';
export const Wrapper = styled.div`
    padding: 0;
    margin: 0;
    height: 58px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;
export const TextLogo = styled.div`
    font-size: 18px;
    text-align: center;
    > p {
        cursor: pointer;
        -webkit-user-select: none;  /* Chrome all / Safari all */
        -moz-user-select: none;     /* Firefox all */
        -ms-user-select: none;      /* IE 10+ */
        user-select: none; 
    }
    @media only screen and (max-width: 675px) {
        font-size: 12px;
    }
`;
export const LanguageWrapper = styled.div`
    height: 24px;
    
    > img { 
        cursor: pointer;
        margin-left:8px;
        width: 36px;
        height: 24px;
        -webkit-user-select: none;  /* Chrome all / Safari all */
        -moz-user-select: none;     /* Firefox all */
        -ms-user-select: none;      /* IE 10+ */
        user-select: none; 
        @media only screen and (max-width: 675px) {
            width: 24px;
            height: 18px;
        }
    }
    @media only screen and (max-width: 675px) {
        height: 18px;
    }
    
`;
export const LoginWrapper = styled.div`

`;
export const WebLogin = styled.div`
    @media only screen and (max-width: 675px) {
        display: none;
    }
    .login {
        color: #1565c0;
    }
    > button {
        font-size: 16px;
        cursor: pointer;
        background: white;
        color: #303030;
        border-radius: 5px;
        padding: 5px;
        margin: 8px;
    }
    .signup {
        background: #1565c0;
        color: white;
    }
`;
export const MobileLogin = styled.div`
    @media only screen and (min-width: 675px) {
        display: none;
    }
    > button {
        background: white;
        border: none;
        border-radius: 5px;
        padding: 7px;
        font-size: 16px;
    }
`;