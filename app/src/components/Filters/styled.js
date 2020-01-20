import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: 1.45rem;
  height: 2rem;
  padding: 0.5rem;
  border-bottom: 1px solid black;
  align-items: center;
  > p {
    padding: 0.5rem;
    font-size: 12px;
    @media only screen and (max-width: 550px) {
      font-size: 10px;
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