/* eslint-disable no-return-await */
import { getRepository } from 'typeorm';

import Character from '../../../models/Character';

interface Request {
  id: string;
  name?: string;
  description_short?: string;
  description_full?: string;
  url_image?: string;
}

class UpdateCharacterService {
  public async execute({
    id,
    name,
    description_short,
    description_full,
    url_image,
  }: Request): Promise<Character> {
    const charactersRepository = getRepository(Character);

    const characterExists = await charactersRepository.findOne(id);

    if (!characterExists) {
      throw new Error('Character does not exists');
    }

    characterExists.name = name || characterExists.name;
    characterExists.description_short =
      description_short || characterExists.description_short;
    characterExists.description_full =
      description_full || characterExists.description_full;
    characterExists.url_image = url_image || characterExists.url_image;
    characterExists.updated_at = new Date(Date.now());

    return await charactersRepository.save(characterExists);
  }
}

export default UpdateCharacterService;
