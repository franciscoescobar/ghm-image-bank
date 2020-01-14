import React from 'react'
import { Actions, Form } from './styled';
import Modal from '../../containers/Modal';
const LoginModal = ({show, login, onClose, onSignUp, title}) => (
    <>
    {show ? (
        <Modal title={title} onClose={onClose}>
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
        </Modal>
        )
    : ""}
    </>
);

export default LoginModal;