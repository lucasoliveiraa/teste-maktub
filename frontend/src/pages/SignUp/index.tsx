import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  console.log(formRef);

  const handleSubmit = useCallback(async(data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);

      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <Input name="name" icon={FiUser} placeholder="Name" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Password" />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="/">
          <FiArrowLeft />
          Volta para login
        </a>
      </Content>
    </Container>
  );
};

export default SignIn;
