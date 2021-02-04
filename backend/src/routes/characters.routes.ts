import { Router } from 'express';
import CharactersController from '../Controllers/CharactersController';

const charactersRouter = Router();

charactersRouter.post('/', CharactersController.create);
charactersRouter.get('/', CharactersController.index);
charactersRouter.get('/:id', CharactersController.show);

export default charactersRouter;
