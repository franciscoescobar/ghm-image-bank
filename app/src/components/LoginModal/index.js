import React, {useState, useEffect} from "react";
import { Actions, Form } from "./styled";
import Modal from "../../containers/Modal";
import { getUserRequest, signUser, getUserById } from '../../thunks/users';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, openSignup, isLoggedIn, logOut } from "../../actions";
import { toast } from "react-toastify";
const LoginModal = ({ title }) => {

  const dispatch = useDispatch();
  const modal = useSelector(state => state.userReducer.modal);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const upcoming = () => {
    toast("This is still under development");
  }
  const logoutHandler = () => {
    dispatch(logOut());
  };
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const formData = {
      email,
      password
    }
    getUserRequest(formData)(dispatch);
  }
  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    const formData = {
      email,
      password
    }
    if(email.length < 7) {
      toast("The email has to be at least 7 characters long");
    }
    else if(password.length < 7) {
      toast("The password has to be at least 7 characters long");
    }
    else if(password !== repeatedPassword) {
      toast("Both passwords have to be the same");
    }
    else {
      signUser(formData)(dispatch);
    }
  }

  useEffect(() => {
    
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate');
    
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      logoutHandler();
      return;
    }
    // set login to true, token to token, role to role and userId to userId
    const userId = localStorage.getItem('userId');
    getUserById(userId)(dispatch);
    const user = {
      login: true,
      token,
      userId
    }
    dispatch(isLoggedIn(user));
  }, [])

  return (
  <>
    {modal.show ? (
      <Modal title={title} onClose={() => { dispatch(closeModal())}}>
        <Actions>
          <button onClick={upcoming} name="google" className="google">
            <i className="fab fa-google"></i>
          </button>
          <button onClick={upcoming} name="facebook" className="facebook">
            <i className="fab fa-facebook-f"></i>
          </button>
        </Actions>
        <Form onSubmit={modal.login ? handleLoginSubmit : handleSignUpSubmit}>
          <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" name="email" placeholder="E-mail" />
          <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" name="password" placeholder="Password" />
          {!modal.login ? (
            <input
              value={repeatedPassword}
              onChange={(e) => {setRepeatedPassword(e.target.value)}}
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
