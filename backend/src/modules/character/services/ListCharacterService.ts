import { getRepository } from 'typeorm';

import Character from '../../../models/Character';

class ListCharacterService {
  public async execute(): Promise<Character[]> {
    const charactersRepository = getRepository(Character);

    const characters = await charactersRepository.find();

    return characters;
  }
}

export default ListCharacterService;
