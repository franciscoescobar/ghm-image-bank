import styled from 'styled-components';
export const Wrapper = styled.div`
    height: 58px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    position: absolute;
    z-index: 5;
    background: white;

`;
export const TextLogo = styled.p`
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
    margin-right: 5%;
    @media only screen and (max-width: 1200px) {
        flex: 5;
    }
    @media only screen and (max-width: 675px) {
        flex: 1;
        margin-right: 5%;
    }      
    
`;
export const WebLogin = styled.div`
    @media only screen and (max-width: 675px) {
        display: none;
    }
    > button {
        background: white;
        border: 1px solid #03a9f4;
        color: #03a9f4;
        border-radius: 5px;
        padding: 5px;
        margin: 4px;
    }
    > button.reversed {
        background: #03a9f4;
        border: 1px solid #03a9f4;
        color: white;
        border-radius: 5px;
        padding: 5px;
        margin: 4px;
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