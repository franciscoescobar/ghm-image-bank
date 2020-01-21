import styled from "styled-components";
export const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  width: 100%;
  margin: 1.45rem 10% 0 10%;
  padding: 8px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 740px) {
    margin: 1.45rem 5% 0 5%;
  }
  > div.selected {
    background: #1565c0;
    color: white;
  }
`;
export const Title = styled.h2`
  margin: 0;
  margin-top: 1.45rem;
  font-size: 24px;
  @media only screen and (max-width: 740px) {
    font-size: 16px;
  }
`;
export const AddButton = styled.button`
  margin-top: 1.45rem;
  margin-left: 1.45rem;
  border: 1px solid #1565c0;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  color: #1565c0;
  font-size: 16px;
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const CategoriesHeader = styled.div`
  margin: 0 10%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 740px) {
    margin: 0 5%;
  }
`;
