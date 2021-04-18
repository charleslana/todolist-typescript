import {Request, Response} from 'express';
import CreateTodoListService from '../services/CreateTodoListService';
import ListAllTodoListService from '../services/ListAllTodoListService';
import ShowTodoListService from '../services/ShowTodoListService';
import StatusInterface from '../../../status';
import UpdateTodoListService from '../services/UpdateTodoListService';
import DeleteTodoListService from '../services/DeleteTodoListService';
import CompletedTodoListService from '../services/CompletedTodoListService';

class TodoListController {

    public async create(request: Request, response: Response): Promise<Object> {

        const createTodoListService = new CreateTodoListService();

        const todoList = await createTodoListService.execute({
            title: request.body.title,
            completed: request.body.completed
        });

        return response.status(201).json(todoList);
    }

    public async list(request: Request, response: Response): Promise<Object> {

        const listAllTodoListService = new ListAllTodoListService();

        const todoList = await listAllTodoListService.execute();

        return response.status(200).json({
            todoList
        });
    }

    public async show(request: Request, response: Response): Promise<Object> {

        const showTodoListService = new ShowTodoListService();

        const todoList = await showTodoListService.execute(request.params.id);

        return response.status(200).json(todoList);
    }

    public async update(request: Request, response: Response): Promise<Object> {

        const updateTodoListService = new UpdateTodoListService();

        const todoList = await updateTodoListService.execute({
            id: request.body.id,
            title: request.body.title,
            completed: request.body.completed
        });

        return response.status(200).json(todoList);
    }

    public async delete(request: Request, response: Response): Promise<Object> {

        const deleteTodoListService = new DeleteTodoListService();

        const todoList = await deleteTodoListService.execute(request.params.id) as StatusInterface;

        return response.status(todoList.statusCode).json(todoList);
    }

    public async patch(request: Request, response: Response): Promise<Object> {

        const completedTodoListService = new CompletedTodoListService();

        const enable = request.query.enable === 'true';

        const todoList = await completedTodoListService.execute({
            id: request.params.id,
            completed: enable
        }) as StatusInterface;

        return response.status(200).json(todoList);
    }
}

export default TodoListController;