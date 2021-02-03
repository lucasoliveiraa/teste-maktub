import { Router } from 'express';
import CharactersRepository from '../repositories/CharactersRepository';

const charactersRouter = Router();
const charactersRepository = new CharactersRepository();

charactersRouter.get('/', (request, response) => {
  const characters = charactersRepository.all();

  return response.json(characters);
});

charactersRouter.post('/', (request, response) => {
  const { name, description_short, description_full, url_image } = request.body;

  const character = charactersRepository.create(
    name,
    description_short,
    description_full,
    url_image,
  );

  return response.json(character);
});

export default charactersRouter;
