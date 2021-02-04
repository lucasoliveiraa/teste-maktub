/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import CreateCharacterService from '../../../services/CreateCharacterService';
import ListCharacterService from '../../../services/ListCharacterService';
import UpdateCharacterService from '../../../services/UpdateCharacterService';

export default {
  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;
    const { description_short } = request.body;
    const { description_full } = request.body;
    const { url_image } = request.body;

    const updateCharacter = new UpdateCharacterService();

    try {
      const character = await updateCharacter.execute({
        id,
        name,
        description_short,
        description_full,
        url_image,
      });

      return response.status(200).json(character);
    } catch (err) {
      console.log(err);
      return response
        .status(400)
        .json({ message: 'Character does not exists' });
    }
  },

  async show(request: Request, response: Response): Promise<Response> {
    const characters = new ListCharacterService();

    const character = await characters.execute();

    return response.json(character);
  },

  async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      description_short,
      description_full,
      url_image,
    } = request.body;

    const createCharacter = new CreateCharacterService();

    const character = createCharacter.execute({
      name,
      description_short,
      description_full,
      url_image,
    });

    return response.status(201).json(character);
  },
};
