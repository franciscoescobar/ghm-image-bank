import React from 'react'
import { Wrapper, TextLogo, LoginWrapper, LanguageWrapper, WebLogin, MobileLogin } from './styled';
import arg from '../../assets/argentina-flag-icon-64.png'
import uk from '../../assets/united-kingdom-flag-icon-64.png'
const Header = () => (
  <Wrapper>
    <TextLogo>ghmcontenidos - banco de imagenes</TextLogo>
    <LanguageWrapper>
        <img src={arg} alt="ARG"/>
        <img src={uk} alt="UK"/>
    </LanguageWrapper>
    <LoginWrapper>
        <WebLogin>
            <button>Ingresar</button>
            <button>Registrate</button>
        </WebLogin>
        <MobileLogin>
            <button>X</button>
        </MobileLogin>
            
    </LoginWrapper>
  </Wrapper>  
);

export default Header;