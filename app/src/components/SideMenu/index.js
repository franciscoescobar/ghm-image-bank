import React from "react";
import { Container, Row } from "./styled";
const SideMenu = ({ show, openSignIn, openSignUp, toggle }) => (
  <>
    {show ? (
      <Container>
        <Row
          onClick={() => {
            openSignIn();
            toggle();
          }}
        >
          <p>Sign in</p>
        </Row>
        <Row
          onClick={() => {
            openSignUp();
            toggle();
          }}
        >
          <p>Sign up</p>
        </Row>
      </Container>
    ) : (
      ""
    )}
  </>
);

export default SideMenu;
