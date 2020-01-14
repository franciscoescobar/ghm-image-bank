import styled from 'styled-components';
export const Wrapper = styled.div`
    height: 58px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;
export const TextLogo = styled.p`
    cursor: pointer;
    margin-left: 5%;
    flex: 7;
    font-size: 16px;
    @media only screen and (max-width: 675px) {
        font-size: 12px;
    }
`;
export const LanguageWrapper = styled.div`
    flex: 2;
    height: 24px;
    
    > img { 
        cursor: pointer;
        margin-left:8px;
        width: 36px;
        height: 24px;
        @media only screen and (max-width: 675px) {
            width: 24px;
            height: 18px;
        }
    }
    @media only screen and (max-width: 1200px) {
        flex: 3;
    }
    @media only screen and (max-width: 675px) {
        height: 18px;
    }
    
`;
export const LoginWrapper = styled.div`
    flex: 2;
    @media only screen and (max-width: 1200px) {
        flex: 3;
    }
    @media only screen and (max-width: 800px) {
        flex: 4;
    }
    @media only screen and (max-width: 675px) {
        flex: 1;
    }     
    
`;
export const WebLogin = styled.div`
    @media only screen and (max-width: 675px) {
        display: none;
    }
    > button {
        cursor: pointer;
        background: white;
        border: 1px solid #1565c0;
        color: #1565c0;
        border-radius: 5px;
        padding: 5px;
        margin: 4px;
    }
    > button:hover, 
    > button:active {
        background: #1565c0;
        border: 1px solid #1565c0;
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