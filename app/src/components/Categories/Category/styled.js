import styled from "styled-components";
export const Wrapper = styled.div`
  font-size: 16px;
  border-radius: 12px;
  margin: 4px;
  padding: 4px 12px;
  cursor: pointer;
  text-align: center;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;
  @media only screen and (max-width: 740px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 420px) {
    font-size: 12px;
  }
`;
