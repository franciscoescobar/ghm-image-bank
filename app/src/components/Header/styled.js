import styled from "styled-components";
export const Wrapper = styled.div`
  position: fixed;
  background: white;
  padding: 0;
  margin: 0;
  height: 58px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  .in-header {
    border: 1px solid gray;
    height: 42px;
    width: 30%;
    max-width: 300px;  
  }
`;
export const TextLogo = styled.div`
  font-size: 18px;
  text-align: center;
  > p {
    cursor: pointer;
    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
    user-select: none;
  }
  @media only screen and (max-width: 675px) {
    font-size: 14px;
  }
`;
export const LanguageWrapper = styled.div`
  display:flex;
  > p {
    cursor: pointer;
    margin-left: 8px;
    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
    user-select: none;
    @media only screen and (max-width: 675px) {
      font-size: 12px;
    }
  }
  .not-selected {
    color: #cbcbcb;
  }
`;
export const LoginWrapper = styled.div``;
export const WebLogin = styled.div`
  display:flex;
  @media only screen and (max-width: 675px) {
    display: none;
  }
  > p {
    font-size: 14px;
    cursor: pointer;
    color: #303030;
  }
  .lighter {
    color: #cbcbcb;
    cursor: default;
  }
  > button {
    padding:0;
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
