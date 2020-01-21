import styled from "styled-components";

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
    border: 1px solid #db4437;
    color: #db4437;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  > input,
  > button {
    margin: 8px 60px;
    border-radius: 5px;
    @media only screen and (max-width: 550px) {
      margin: 8px 30px;
    }
  }
  > input {
    font-size: 14px;
    height: 32px;
    background: #cbcbcb;
    border: none;
    padding-left: 5px;
  }
  > button {
    height: 38px;
    font-size: 16px;
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
`;
