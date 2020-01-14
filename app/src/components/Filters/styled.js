import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: 16px 10%;
  padding: 8px;
  border-bottom: 1px solid black;
  @media only screen and (max-width: 740px) {
    margin: 16px 5%;
  }
  .selected {
    background: #1565c0;
    color: white;
  }
`;