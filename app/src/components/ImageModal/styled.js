import styled from "styled-components";
export const Wrapper = styled.div`
  height: 400px;
  display: flex;
  @media only screen and (max-width: 650px) {
    flex-direction: column;
    overflow: scroll;
  }
  > img {
    object-fit: contain;
    margin: 8px 12px 32px 14px;
    max-height: 400px;
    border-radius: 5px;
    @media only screen and (max-width: 650px) {
      margin: 0;
      max-height: 400px;
      width: 100%;
    }
  }
`;
export const Data = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  > input {
    background: #cbcbcb;
    border: none;
    border-radius: 5px;
    margin: 8px;
    height: 29px;
    text-align: center;
  }
  > select {
    margin: 8px;
  }
  > button {
    border-radius: 5px;
    height: 32px;
    color: white;
    margin: 8px;
    background: #43dd4d;
    margin-bottom: 12px;
  }
`;
