import { Router } from 'express';
import CharactersController from '../Controllers/CharactersController';

import ensureAuthenticated from '../../../../../middlewares/ensureAuthenticated';

const charactersRouter = Router();

charactersRouter.post(
  '/character',
  ensureAuthenticated,
  CharactersController.create,
);
charactersRouter.get('/character/list', CharactersController.show);
charactersRouter.get(
  '/character/update/:id',
  ensureAuthenticated,
  CharactersController.update,
);

export default charactersRouter;
