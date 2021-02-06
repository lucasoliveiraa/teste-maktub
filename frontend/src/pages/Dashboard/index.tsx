import React, { useEffect, useState } from 'react';
import { FiEdit, FiPower, FiTrash2, FiUserPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  SubHeader,
  Cards,
  ButtonsContent,
  Card
} from './styles';

interface ICharacter {
  id: number;
  name: string;
  description_short: string;
  description_full: string;
  url_image: string;
}

const Dashboard: React.FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const { signOut, user } = useAuth();

  useEffect(() => {
    async function loadCharacters(): Promise<void> {
      const response = await api.get('/character/list');

      setCharacters(response.data);
    }
    loadCharacters();
  }, []);

  async function handleRemoveCharacter(id: number): Promise<void> {
    await api.delete(`/character/${id}`);

    setCharacters(characters.filter(
      (character) => character.id !== id
    ));
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logo} alt="Naruto" />
          <Profile>
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <SubHeader>
          <h1>Wiki Naruto</h1>
          <Link to="/createcharacter">
            <FiUserPlus />
            Adicionar
          </Link>
        </SubHeader>
        <Cards>
          {characters && characters.map((character) => (
            <Card key={character.id}>
              <img
                src={character.url_image}
                alt={character.name}
              />
              <h1>{character.name}</h1>
              <span>{character.description_short}</span>
              <p>{character.description_full}</p>
              <ButtonsContent>
                <button type="button">
                  <FiEdit size={20} color="#ffff00" />
                </button>
                <button type="button" onClick={() => handleRemoveCharacter(character.id)}>
                  <FiTrash2 size={20} color="#ec0707" />
                </button>
              </ButtonsContent>
            </Card>
          ))}
        </Cards>
      </Content>
    </Container>
  );
};

export default Dashboard;