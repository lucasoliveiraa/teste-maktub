import React from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <form action="">
          <h1>Sign In</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Password" />
          <Button type="button">Entrar</Button>
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
