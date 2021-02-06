import React, { useCallback, useRef } from 'react';
import { FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer } from './styles';

interface SignInFormData {
  id: number;
  name: string;
  description_short: string;
  description_full: string;
  url_image: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(async(data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        description_short: Yup.string()
          .required('Informe clã.'),
        description_full: Yup.string().required('Falta a descrição.'),
        url_image: Yup.string().url().required('URL da imagem'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.put(`/character/update/${id}`, data);

      alert('Personagem adicionado');

      history.push('/dashboard');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    }
  }, [history]);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input name="name" icon={FiUser} placeholder="Name" />
            <Input name="description_short" icon={FiUser} placeholder="Clã do personagem" />
            <Input name="description_full" icon={FiUser} placeholder="Descrição do personagem" />
            <Input name="url_image" icon={FiUser} placeholder="URL da imagem" />
            <Button type="submit">Adicionar</Button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignIn;
