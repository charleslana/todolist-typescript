import {Router} from 'express';
import TodoListController from '../controllers/TodoListController';

const todoListRoute = Router();
const todoListController = new TodoListController();

todoListRoute.post('/todo', todoListController.create);
todoListRoute.get('/todo', todoListController.list);
todoListRoute.get('/todo/:id', todoListController.show);

export default todoListRoute;