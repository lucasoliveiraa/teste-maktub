import { getRepository } from 'typeorm';

import Character from '../../../models/Character';

interface Request {
  name: string;
  description_short: string;
  description_full: string;
  url_image: string;
}

class CreateCharacterService {
  public async execute({
    name,
    description_short,
    description_full,
    url_image,
  }: Request): Promise<Character> {
    const charactersRepository = getRepository(Character);

    const character = charactersRepository.create({
      name,
      description_short,
      description_full,
      url_image,
    });

    await charactersRepository.save(character);

    return character;
  }
}

export default CreateCharacterService;
