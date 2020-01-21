import styled from "styled-components";
export const Container = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.6); /* Black w/ opacity */
  .large {
    width: 600px;
    margin: 4% auto; /* Change between screen sizes */
    @media only screen and (max-width: 650px) {
      width: 80%;
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
  background-color: #fefefe;
  border: 1px solid #888;
  padding: 0 20px;
  border-radius: 5px;
  width: 450px; /* Could be more or less, depending on screen size */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  margin: 8% auto; /* Change between screen sizes */
  @media only screen and (max-width: 800px) {
    margin: 18% auto;
  }
  @media only screen and (max-width: 550px) {
    margin: 25% auto;
    width: 80%;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > h1 {
    font-size: 24px;
  }
  > button {
    height: 24px;
    width: 24px;
  }
  @media only screen and (max-width: 550px) {
    margin-bottom: 8px;
  }
`;
