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
import { openSignup, openLogin } from "../../actions";
const Header = () => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.userReducer.modal);
  const user = useSelector(state => state.userReducer.user);
  const [showMenu, setShowMenu] = useState(false);

  const onLoginClick = () => {
    dispatch(openLogin());
  };
  const onSignUpClick = () => {
    dispatch(openSignup());
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <Wrapper>
      <TextLogo>
        <p>ghmcontenidos - gallery</p>
      </TextLogo>
      <LanguageWrapper>
        <img src={arg} alt="ARG" />
        <img src={uk} alt="UK" />
      </LanguageWrapper>
      { user.login ? "" :
      <LoginWrapper>
        <WebLogin>
          <button onClick={onLoginClick} className="login" name="login">
            Login
          </button>
          <button onClick={onSignUpClick} className="signup" name="signup">
            Sign Up
          </button>
        </WebLogin>
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
      }
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
