import TodoListRepository from '../repositories/TodoListRepository';
import AppError from '../../../error/AppError';

class DeleteTodoListService {

    public async execute(id: string): Promise<Object> {

        const todoListRepository = new TodoListRepository();
        const todoList = await todoListRepository.findById(id);

        if (!todoList) {
            throw new AppError('Todo list not found.');
        }

        await todoListRepository.deleteById(id);

        return {
            statusCode: 200,
            status: 'success',
            message: 'Todo list deleted successfully.'
        }
    }
}

export default DeleteTodoListService;