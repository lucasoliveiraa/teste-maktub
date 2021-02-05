import React from 'react';
import { FiLogIn } from 'react-icons/fi';

// import Input from '../../components/Input';
// import Button from '../../components/Button';

import { Container, Content } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <form action="">
          <h1>Sign In</h1>
          <input placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <button type="button">Entrar</button>
        </form>
        <a href="/">
          <FiLogIn />
          Criar sua conta
        </a>
      </Content>
    </Container>
  );
};

export default SignIn;
