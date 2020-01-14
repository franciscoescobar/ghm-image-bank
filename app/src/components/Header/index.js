import React from 'react'
import { Wrapper, TextLogo, LoginWrapper, LanguageWrapper, WebLogin, MobileLogin } from './styled';
import arg from '../../assets/argentina-flag-icon-64.png'
import uk from '../../assets/united-kingdom-flag-icon-64.png'
const Header = () => (
  <Wrapper>
    <TextLogo>
      <p>ghmcontenidos - banco de imagenes</p>
    </TextLogo>
    <LanguageWrapper>
        <img src={arg} alt="ARG"/>
        <img src={uk} alt="UK"/>
    </LanguageWrapper>
    <LoginWrapper>
        <WebLogin>
            <button name="signin">Ingresar</button>
            <button name="signup">Registrate</button>
        </WebLogin>
        <MobileLogin>
            <button name="side-menu"><i className="fas fa-bars"></i></button>
        </MobileLogin>
    </LoginWrapper>
  </Wrapper>  
);

export default Header;