import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Character from '../models/Character';

export default {
  async index(request: Request, response: Response): Promise<Response> {
    const charactersRepository = getRepository(Character);

    const characters = await charactersRepository.find();

    return response.json(characters);
  },

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const charactersRepository = getRepository(Character);

    const character = await charactersRepository.findOneOrFail(id);

    return response.json(character);
  },

  async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      description_short,
      description_full,
      url_image,
    } = request.body;

    const charactersRepository = getRepository(Character);

    const character = charactersRepository.create({
      name,
      description_short,
      description_full,
      url_image,
    });

    await charactersRepository.save(character);

    return response.status(201).json(character);
  },
};
