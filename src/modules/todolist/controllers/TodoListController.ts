import {Request, Response} from 'express';
import TodoListInterface from '../interfaces/TodoListInterface';

const toDoList : Array<TodoListInterface> = [];

class TodoListController {

    public async create(request: Request, response: Response): Promise<Object> {

        const addToDoList = {
            title: request.body.title,
            completed: request.body.completed
        }

        toDoList.push(addToDoList);

        return response.status(200).json({
            addToDoList
        });
    }

    public async list(request: Request, response: Response): Promise<Object> {

        return response.status(200).json({
            toDoList
        });
    }
}

export default TodoListController;