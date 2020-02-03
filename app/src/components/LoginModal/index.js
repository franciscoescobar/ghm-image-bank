import React, {useState} from "react";
import { Actions, Form } from "./styled";
import Modal from "../../containers/Modal";
import { getUserRequest, signUser } from '../../thunks/users';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, openSignup } from "../../actions";
const LoginModal = ({ title }) => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.userReducer.modal);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const formData = {
      email,
      password
    }
    getUserRequest(formData)(dispatch);
    dispatch(closeModal());
  }
  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    const formData = {
      email,
      password
    }
    signUser(formData)(dispatch);
    dispatch(closeModal());
  }
  return (
  <>
    {modal.show ? (
      <Modal title={title} onClose={() => { dispatch(closeModal())}}>
        <Actions>
          <button name="google" className="google">
            <i className="fab fa-google"></i>
          </button>
          <button name="facebook" className="facebook">
            <i className="fab fa-facebook-f"></i>
          </button>
        </Actions>
        <Form onSubmit={modal.login ? handleLoginSubmit : handleSignUpSubmit}>
          <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" name="email" placeholder="E-mail" />
          <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" name="password" placeholder="Password" />
          {!modal.login ? (
            <input
              type="password"
              name="repeat-password"
              placeholder="Repeat password"
            />
          ) : (
            ""
          )}
          <button name="submit" type="submit">
            {modal.login ? "Ingresar" : "Aceptar"}
          </button>
          {modal.login ? (
            <p>
              You don't have an account?{" "}
              <button name="signup" onClick={() => {dispatch(openSignup())}}>
                Sign Up
              </button>
            </p>
          ) : (
            <p></p>
          )}
        </Form>
      </Modal>
    ) : (
      ""
    )}
  </>
)};

export default LoginModal;
