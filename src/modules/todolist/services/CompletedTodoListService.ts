import TodoListRepository from '../repositories/TodoListRepository';
import CompletedTodoListInterface from '../interfaces/CompletedTodoListInterface';
import EntityTodoListInterface from '../interfaces/EntityTodoListInterface';
import AppError from "../../../error/AppError";

class CompletedTodoListService {

    public async execute({id, completed}: CompletedTodoListInterface): Promise<Object> {

        const todoListRepository = new TodoListRepository();
        const todoList = await todoListRepository.findById(id) as EntityTodoListInterface;

        if (!todoList) {
            throw new AppError('Todo list not found.');
        }

        return await todoListRepository.saveById({
            id: todoList.id,
            title: todoList.title,
            completed
        });
    }
}

export default CompletedTodoListService;