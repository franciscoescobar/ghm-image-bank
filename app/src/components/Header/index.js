import React, { useState, useEffect } from "react";
import {
  Wrapper,
  TextLogo,
  LoginWrapper,
  LanguageWrapper,
  WebLogin,
  MobileLogin
} from "./styled";
import LoginModal from "../LoginModal";
import SideMenu from "../SideMenu";
import { useSelector, useDispatch } from 'react-redux';
import { openSignup, openLogin, switchLanguage, logOut, updateSearchInput } from "../../actions";
import { getProductsFilteredRequest, getProductsRequest } from '../../thunks/images';
import { useDebounce } from 'use-debounce';
import { SearchInput } from "../Hero/styled";
const Header = () => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.userReducer.modal);
  const user = useSelector(state => state.userReducer.user);
  const language = useSelector(state => state.languageReducer.language);
  const posts = useSelector(state => state.imagesReducer);
  const [value] = useDebounce(posts.searchInput, 800);
  const [withSearch, setWithSearch] = useState(false);
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
  useEffect(() => {
    window.addEventListener('scroll', onHeaderScroll);
  }, [])
  const onHeaderScroll = (event) => {
    if (window.scrollY > 305 ) {
      setWithSearch(true);
    } else {
      setWithSearch(false);
    }
  }
  const onSearchValueChange = (event) => {
    dispatch(updateSearchInput(event.target.value));
  }
  useEffect(() => {
    if(value.length >= 3){
      getProductsFilteredRequest(value, 1)(dispatch)
    }
    else {
      getProductsRequest(1)(dispatch);
    }
  }, [value,dispatch])

  return (
    <Wrapper>
      <TextLogo>
        <p>{language === "en-US" ? "ghmcontenidos - gallery" : "ghmcontenidos - galleria"}</p>
      </TextLogo>
      {withSearch ?
        <SearchInput onChange={onSearchValueChange} value={posts.searchInput} className="in-header" placeholder="Search"/>
       : ""
      }
      <LanguageWrapper>
        <p className={language === "es-AR" ? "" : "not-selected"} onClick={() => {toggleLanguage("es-AR")}} > ES </p>
        <p> | </p>
        <p className={language === "en-US" ? "" : "not-selected"} onClick={() => {toggleLanguage("en-US")}} > EN </p>
      </LanguageWrapper>
      <LoginWrapper>
      { user.login ? 
        <WebLogin>
          <p className="lighter">Francisco</p>
          <button onClick={onSignOutClick} name="signout">
          {language === "en-US" ? "/Sign out" : "/Salir"}
          </button>
        </WebLogin> :
        <WebLogin>
          <button onClick={onLoginClick} name="login">
          {language === "en-US" ? "Login": "Ingresar "}
          </button>
          <p>&nbsp;|&nbsp;</p>
          <button onClick={onSignUpClick} name="signup">
          {language === "en-US" ? " Sign up" : " Registrar"}
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
