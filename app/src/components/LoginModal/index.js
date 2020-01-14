import React from 'react'
import {Container, Wrapper, Header, Actions, Form} from './styled';
 
const LoginModal = ({show, login, onClose, onSignUp}) => (
    <>
    {show ? (
        <Container>
            <Wrapper>
            <Header>
                <h1>{login ? "Ingresar" : "Registrate"}</h1>
                <button onClick={onClose} name="close"><i className="fas fa-times"></i></button>
            </Header>
            <Actions>
                <button name="google" className="google"><i class="fab fa-google"></i></button>
                <button name="facebook" className="facebook"><i class="fab fa-facebook-f"></i></button>
            </Actions>
            <Form>
                <input type="email" name="email" placeholder="E-mail" />
                <input type="password" name="password" placeholder="Contraseña" />
                {!login ? <input type="password" name="repeat-password" placeholder="Repetir contraseña" /> : ""}
                <button name="submit" type="submit">{login ? "Ingresar" : "Aceptar"}</button>
                {login ? <p>¿No tienes cuenta? <button name="signup" onClick={onSignUp}>Registrate</button></p> : <p></p>}
            </Form>
            </Wrapper>
        </Container>
        )
    : ""}
    </>
);

export default LoginModal;