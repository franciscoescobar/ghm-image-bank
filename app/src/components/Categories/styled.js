import styled from 'styled-components';
export const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  margin: 16px 20%;
  padding: 8px;
  flex-wrap: wrap;
  > div.selected {
    border: 1px solid #03a9f4;
    background: #03a9f4;
    color: white;
  }
`;