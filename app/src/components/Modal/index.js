import React from 'react'
import { Container, Wrapper, Header } from './styled';

const Modal = ({children, onClose, title, large}) => (
    <Container>
        <Wrapper className={large ? "large" : ""}>
            <Header onClose={onClose}>
                <h1>{title}</h1>
                <button onClick={onClose} name="close"><i className="fas fa-times"></i></button>
            </Header>
            {children}
        </Wrapper>
    </Container>
);

export default Modal;