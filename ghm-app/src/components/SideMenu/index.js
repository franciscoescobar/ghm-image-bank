import React from "react";
import { Container, Row } from "./styled";
import {useSelector} from 'react-redux';
const SideMenu = ({ show, openSignIn, openSignUp, toggle }) => {
  const user = useSelector(state => state.userReducer.user);
  const language = useSelector(state => state.languageReducer.language);
  return(
  <>
    {show ? (
      <Container>
      {user.login ? 
        <Row
          onClick={() => {
            toggle();
          }}
        >
          <p>{language === "en-US" ? "Sign out" : "Cerrar sesion"}</p>
        </Row>
        :
        <>
          <Row
            onClick={() => {
              openSignIn();
              toggle();
            }}
          >
            <p>{language === "en-US" ? "Sign in" : "Ingesar"}</p>
          </Row>
          <Row
            onClick={() => {
              openSignUp();
              toggle();
            }}
          >
            <p>{language === "en-US" ? "Sign up" : "Registrar"}</p>
          </Row>
        </>
      }
      </Container>
    ) : (
      ""
    )}
  </>
)};

export default SideMenu;
