import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding-top: 54px;
  width: 100%;
  height: 500px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-image: url("https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  @media only screen and (max-width: 740px) {
    height: 300px;
  }
  @media only screen and (max-width: 420px) {
    height: 200px;
  }
  > div > h1 {
    color: white;
    font-size: 48px;
    margin: 0 20%;
    @media only screen and (max-width: 740px) {
      font-size: 36px;
      margin: 10% 10% 0 10%;
    }
    @media only screen and (max-width: 420px) {
      font-size: 24px;
      margin: 7% 7% 0 7%;
    }
  }
`;
export const SearchWrapper = styled.div`
  display:flex;
  padding-left: 1rem;
  justify-content: center;
  align-items: center;
  height: 120px;
  @media only screen and (max-width: 740px) {
    height: 100px;
  }
  @media only screen and (max-width: 420px) {
    height: 80px;
  }
`;
export const SearchInput = styled.input`
  height: 52px;
  padding-left: 12px; 
  margin-right: 12px; 
  border-radius: 5px;
  border: none;
  background: white;
  width: 60%;
  @media only screen and (max-width: 740px) {
    height: 48px;
  }
  @media only screen and (max-width: 420px) {
    height: 36px;
  }
`;
