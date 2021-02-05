import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

// import Input from '../../components/Input';
// import Button from '../../components/Button';

import { Container, Content } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <form action="">
          <h1>Sign Up</h1>
          <input placeholder="Name" />
          <input placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <button type="button">Cadastrar</button>
        </form>
        <a href="/">
          <FiArrowLeft />
          Volta para login
        </a>
      </Content>
    </Container>
  );
};

export default SignIn;
