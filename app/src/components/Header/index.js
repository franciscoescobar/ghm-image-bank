import React, { useState } from "react";
import {
  Wrapper,
  TextLogo,
  LoginWrapper,
  LanguageWrapper,
  WebLogin,
  MobileLogin
} from "./styled";
import arg from "../../assets/argentina-flag-icon-64.png";
import uk from "../../assets/united-kingdom-flag-icon-64.png";
import LoginModal from "../LoginModal";
import SideMenu from "../SideMenu";
import { useSelector, useDispatch } from 'react-redux';
import { openSignup, openLogin, switchLanguage, logOut } from "../../actions";
const Header = () => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.userReducer.modal);
  const user = useSelector(state => state.userReducer.user);
  const language = useSelector(state => state.languageReducer.language);
  const [showMenu, setShowMenu] = useState(false);

  const onLoginClick = () => {
    dispatch(openLogin());
  };
  const onSignUpClick = () => {
    dispatch(openSignup());
  };
  const onSignOutClick = () => {
    const result = window.confirm("¿Seguro que quieres cerrer sesión?");
    if(result){
      dispatch(logOut());
    }
  }
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const toggleLanguage = (l) => {
    dispatch(switchLanguage(l));
  }
  return (
    <Wrapper>
      <TextLogo>
        <p>{language === "en-US" ? "ghmcontenidos - gallery" : "ghmcontenidos - galleria"}</p>
      </TextLogo>
      <LanguageWrapper>
        <img onClick={() => {toggleLanguage("es-AR")}} src={arg} alt="ARG" />
        <img onClick={() => {toggleLanguage("en-US")}} src={uk} alt="UK" />
      </LanguageWrapper>
      <LoginWrapper>
      { user.login ? 
        <WebLogin>
          <button onClick={onSignOutClick} className="signup" name="signout">
          {language === "en-US" ? "Sign out" : "Salir"}
          </button>
        </WebLogin> :
        <WebLogin>
          <button onClick={onLoginClick} className="login" name="login">
          {language === "en-US" ? "Login" : "Ingresar"}
          </button>
          <button onClick={onSignUpClick} className="signup" name="signup">
          {language === "en-US" ? "Sign up" : "Registrar"}
          </button>
        </WebLogin>
        }
        <MobileLogin>
          <button
            aria-label="login-side-menu"
            name="login-side-menu"
            onClick={toggleMenu}
          >
            <i className={showMenu ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </MobileLogin>
      </LoginWrapper>
      <SideMenu
        toggle={toggleMenu}
        show={showMenu}
        onCloseMenu={toggleMenu}
        openSignIn={onLoginClick}
        openSignUp={onSignUpClick}
      ></SideMenu>
      <LoginModal title={modal.login ? "Sign In" : "Sign Up"}/>
    </Wrapper>
  );
};

export default Header;
