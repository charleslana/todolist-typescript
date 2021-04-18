import TodoListRepository from '../repositories/TodoListRepository';
import AppError from '../../../error/AppError';

class ShowTodoListService {

    public async execute(id: string): Promise<Object | undefined> {

        const todoListRepository = new TodoListRepository();
        const findTodoList = await todoListRepository.findById(id);

        if (!findTodoList) {
            throw new AppError('Todo list not found.');
        }

        return findTodoList;
    }
}

export default ShowTodoListService;