import {Request, Response} from 'express';
import CreateTodoListService from '../services/CreateTodoListService';
import ListAllTodoListService from '../services/ListAllTodoListService';
import ShowTodoList from '../services/ShowTodoList';
import StatusInterface from '../../../status';

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

        const listAllTodoList = new ListAllTodoListService();

        const todoList = await listAllTodoList.execute();

        return response.status(200).json({
            todoList
        });
    }

    public async show(request: Request, response: Response): Promise<Object> {

        const showTodoList = new ShowTodoList();

        const todoList = await showTodoList.execute(request.params.id) as StatusInterface;

        return response.status(todoList.statusCode ? todoList.statusCode : 200).json(todoList);
    }
}

export default TodoListController;