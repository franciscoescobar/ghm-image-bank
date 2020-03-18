import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: 1.50rem;
  border-top: 1px solid #545454;
  align-items: center;
  > p {
    margin-top:1.5rem;
    margin-bottom:0.75rem;
    font-size: 20px;
    @media only screen and (max-width: 550px) {
      font-size: 14px;
    }
  }
  .selected {
    background: #1565c0;
    color: white;
  }
`;
export const AddButton = styled.button`
  border: 1px solid #1565c0;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  color: #1565c0;
  font-size: 12px;
  margin-left: auto;
`;
