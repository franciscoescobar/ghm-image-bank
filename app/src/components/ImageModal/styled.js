import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 650px) {
    flex-direction: column;
    overflow: scroll;
  }
  > img {
    object-fit: contain;
    margin: 8px 12px 32px 14px;
    max-height: 600px;
    max-width: 400px;
    border-radius: 5px;
    @media only screen and (max-width: 650px) {
      margin: 0;
      max-height: 400px;
      width: 100%;
    }
  }
`;
export const Data = styled.form`
  display: flex;
  flex-direction: row;
  text-align: center;
  margin: 8px 0 32px 0;
  flex-wrap: wrap;
  align-content: center;
  > input,
  > select {
    width: 100%;
    color: #303030;
    background: #cbcbcb;
    border: none;
    border-radius: 5px;
    margin: 8px;
    height: 29px;
    text-align: center;
  }
  > select {
    -webkit-appearance: none;
    appearance: none;
  }
  > button {
    width: 100%;
    align-self: flex-end;
    border-radius: 5px;
    height: 32px;
    color: white;
    margin: 8px;
    background: #43dd4d;
    margin-bottom: 12px;
  }
`;
