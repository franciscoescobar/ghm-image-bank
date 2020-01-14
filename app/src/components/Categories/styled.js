import styled from 'styled-components';
export const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  margin: 16px 10%;
  padding: 8px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 740px) {
    margin: 16px 5%;
  }
  
  > div.selected {
    background: #1565c0;
    color: white;
  }
`;
export const Title = styled.h2`
  margin: 16px 10%;
  font-size: 24px;
  @media only screen and (max-width: 740px) {
    margin: 16px 5%;
    font-size: 20px;
  }
`