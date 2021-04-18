import {Request, Response} from 'express';
import CreateTodoListService from '../services/CreateTodoListService';
import ListAllTodoListService from '../services/ListAllTodoListService';
import ShowTodoListService from '../services/ShowTodoListService';
import StatusInterface from '../../../status';
import UpdateTodoListService from '../services/UpdateTodoListService';
import DeleteTodoListService from '../services/DeleteTodoListService';

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

        const todoList = await showTodoListService.execute(request.params.id) as StatusInterface;

        return response.status(todoList.statusCode ? todoList.statusCode : 200).json(todoList);
    }

    public async update(request: Request, response: Response): Promise<Object> {

        const updateTodoListService = new UpdateTodoListService();

        const todoList = await updateTodoListService.execute({
            id: request.body.id,
            title: request.body.title,
            completed: request.body.completed
        }) as StatusInterface;

        return response.status(todoList.statusCode ? todoList.statusCode : 200).json(todoList);
    }

    public async delete(request: Request, response: Response): Promise<Object> {

        const deleteTodoListService = new DeleteTodoListService();

        const todoList = await deleteTodoListService.execute(request.params.id) as StatusInterface;

        return response.status(todoList.statusCode).json(todoList);
    }
}

export default TodoListController;