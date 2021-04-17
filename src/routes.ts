import {Router} from 'express';
import todoListRoute from './modules/todolist/routes';
import errorHandling from './error';

const routes = Router();

routes.use(todoListRoute);

routes.use(errorHandling);

export default routes;