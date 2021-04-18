import {Router} from 'express';
import TodoListController from '../controllers/TodoListController';

const todoListRoute = Router();
const todoListController = new TodoListController();

todoListRoute.post('/todo', todoListController.create);
todoListRoute.get('/todo', todoListController.list);
todoListRoute.get('/todo/:id', todoListController.show);
todoListRoute.put('/todo', todoListController.update);
todoListRoute.delete('/todo/:id', todoListController.delete);
todoListRoute.patch('/todo/:id/completed', todoListController.patch);

export default todoListRoute;