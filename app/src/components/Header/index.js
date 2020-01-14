import React, {useState} from 'react'
import { Wrapper, TextLogo, LoginWrapper, LanguageWrapper, WebLogin, MobileLogin } from './styled';
import arg from '../../assets/argentina-flag-icon-64.png'
import uk from '../../assets/united-kingdom-flag-icon-64.png'
import LoginModal from '../LoginModal';
const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const onLoginClick = () => {
    setIsLogin(true);
    setShowModal(true);
  }
  const onSignUpClick = () => {
    setIsLogin(false);
    setShowModal(true);
  }
  const handleCloseModal = () => {
    setShowModal(false);
  }
  return(
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
            <button onClick={onLoginClick} name="signin">Ingresar</button>
            <button onClick={onSignUpClick} name="signup">Registrate</button>
        </WebLogin>
        <MobileLogin>
            <button name="side-menu" onClick={onLoginClick}><i className="fas fa-bars"></i></button>
        </MobileLogin>
    </LoginWrapper>
    <LoginModal onSignUp={onSignUpClick} onClose={handleCloseModal} show={showModal} login={isLogin} />
  </Wrapper>  
)};

export default Header;