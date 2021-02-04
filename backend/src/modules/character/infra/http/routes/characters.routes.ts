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
charactersRouter.put(
  '/character/update/:id',
  ensureAuthenticated,
  CharactersController.update,
);
charactersRouter.delete(
  '/character/:id',
  ensureAuthenticated,
  CharactersController.delete,
);

export default charactersRouter;
