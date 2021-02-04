import { getRepository } from 'typeorm';

import Character from '../../../models/Character';

interface Request {
  id: string;
}

class DeleteCharacterService {
  public async execute({ id }: Request): Promise<void> {
    const charactersRepository = getRepository(Character);

    const characterExists = await charactersRepository.findOne(id);

    if (!characterExists) {
      throw new Error('Character does no exists.');
    }

    await charactersRepository.remove(characterExists);
  }
}

export default DeleteCharacterService;
