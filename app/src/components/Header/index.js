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
      <p>ghmcontenidos - gallery</p>
    </TextLogo>
    <LanguageWrapper>
        <img src={arg} alt="ARG"/>
        <img src={uk} alt="UK"/>
    </LanguageWrapper>
    <LoginWrapper>
        <WebLogin>
            <button onClick={onLoginClick} name="signin">Sign In</button>
            <button onClick={onSignUpClick} name="signup">Sign Up</button>
        </WebLogin>
        <MobileLogin>
            <button aria-label="login-side-menu" name="login-side-menu" onClick={onLoginClick}><i className="fas fa-bars"></i></button>
        </MobileLogin>
    </LoginWrapper>
    <LoginModal title={isLogin ? "Sign In" : "Sign Up"} onSignUp={onSignUpClick} onClose={handleCloseModal} show={showModal} login={isLogin} />
  </Wrapper>  
)};

export default Header;