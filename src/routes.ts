import {Router} from 'express';
import todoListRoute from './modules/todolist/routes';

const routes = Router();

routes.use(todoListRoute);

export default routes;