import styled from "styled-components";
export const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  margin: 1.45rem 10% 0 10%;
  padding: 8px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 740px) {
    margin: 1.45rem 5%;
  }
  > div.selected {
    background: #1565c0;
    color: white;
  }
`;
export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-text: center;
  margin: 1.45rem;
  > button {
    border-radius: 5px;
    height: 32px;
    color: white;
    background: #43dd4d;
  }
  > input {
    background: #cbcbcb;
    border: none;
    border-radius: 5px;
    margin-bottom: 1.45rem;
    height: 29px;
    width: 15rem;
    text-align: center;
    color: #303030;
  }
`;
