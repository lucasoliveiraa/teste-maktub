import { Router } from 'express';

import usersRouter from './modules/user/infra/http/routes/user.routes';
import charactersRouter from './modules/character/infra/http/routes/characters.routes';

const routes = Router();

routes.use(usersRouter);
routes.use(charactersRouter);

export default routes;
