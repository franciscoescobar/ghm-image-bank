import styled from "styled-components";
export const Container = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.8); /* Black w/ opacity */
  .large {
    width: 60%;
    margin: 4% auto; /* Change between screen sizes */
    @media only screen and (max-width: 1140px) {
      width: 80%;
    }
    @media only screen and (max-width: 800px) {
      margin: 25% auto;
      width: 80%;
      overflow: scroll;
      max-height: 95%;
    }
    @media only screen and (max-width: 800px) {
      margin: 4% auto;
    }
  }
  .extralarge {
    width: 800px;
    margin: 4% auto; /* Change between screen sizes */
    @media only screen and (max-width: 870px) {
      width: 80%;
    }
  }
`;
export const Wrapper = styled.div`
  padding: 0 20px;
  border-radius: 5px;
  width: 700px; /* Could be more or less, depending on screen size */
  display: flex;
  flex-direction: column;
  margin: 8% auto; /* Change between screen sizes */
  @media only screen and (max-width: 800px) {
    margin: 18% auto;
  }
  @media only screen and (max-width: 750px) {
    margin: 25% auto;
    width: 80%;
    overflow: scroll;
    max-height: 95%;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > h1 {
    font-size: 48px;
    color: white;
    font-weight: 200;
  }
  > button {
    background: transparent;
    color: white;
  }
  @media only screen and (max-width: 550px) {
    margin-bottom: 8px;
  }
`;
