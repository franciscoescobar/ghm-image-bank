import styled from "styled-components";
export const Wrapper = styled.div`
  font-size: 16px;
  border-radius: 12px;
  margin: 4px;
  padding: 4px 12px;
  @media only screen and (max-width: 740px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 420px) {
    font-size: 12px;
  }
  > i {
    padding: 6px;
    font-size: 10px;
    margin-left: 6px; 
    background: #cbcbcb;
    border-radius: 50%;
    text-align: center;
    color: #ababab;
  }
  > input {

    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
    user-select: none;
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    text-align: center;
    cursor: pointer;
    max-width: 125px;
    color:inherit;
  }
`;
