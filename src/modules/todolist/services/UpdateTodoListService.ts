import EntityTodoListInterface from '../interfaces/EntityTodoListInterface';
import TodoListRepository from '../repositories/TodoListRepository';
import AppError from '../../../error/AppError';

class UpdateTodoListService {

    public async execute({id, title, completed}: EntityTodoListInterface): Promise<Object> {

        const todoListRepository = new TodoListRepository();
        const todoList = await todoListRepository.findById(id);

        if (!todoList) {
            throw new AppError('Todo list not found.');
        }

        return await todoListRepository.saveById({
            id,
            title,
            completed
        });
    }
}

export default UpdateTodoListService;