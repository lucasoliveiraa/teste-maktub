import { Router } from 'express';
import CharactersController from '../Controllers/CharactersController';

const charactersRouter = Router();

charactersRouter.post('/character', CharactersController.create);
charactersRouter.get('/character/list', CharactersController.show);
charactersRouter.put('/character/update/:id', CharactersController.update);
charactersRouter.delete('/character/:id', CharactersController.delete);

export default charactersRouter;
