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
    justify-content: center;
    align-items: center;
  .form {
    display: flex;
    flex-direction: row;
  }
  .inputs { 
    display: flex;
    flex-direction: column;
  }
  .inputs > input,
  > button {
    margin: 8px 60px;
    border-radius: 5px;
    @media only screen and (max-width: 550px) {
      margin: 8px 30px;
    }
  }
  .inputs > input {
    font-size: 14px;
    height: 32px;
    background: white;
    border: none;
    width: 400px;
    padding-left: 8px;
  }
  .form > button {
    padding: 36px;
    font-size: 16px;
    background: #5a5a5a;
    border: 1px solid #cecece;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    max-height: 96.22px;
  }
  > p {
    font-size: 14px;
    color: white;
    > button {
      text-decoration: underline;
      color: white;
      background: transparent;
    }
  }
`;
