import { Router } from 'express';
import CharactersController from '../Controllers/CharactersController';

const charactersRouter = Router();

charactersRouter.post('/character', CharactersController.create);
charactersRouter.get('/character/create', CharactersController.show);
charactersRouter.get('/character/update/:id', CharactersController.update);

export default charactersRouter;
