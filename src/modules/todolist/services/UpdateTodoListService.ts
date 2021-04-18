import EntityTodoListInterface from '../interfaces/EntityTodoListInterface';
import TodoListRepository from '../repositories/TodoListRepository';

class UpdateTodoListService {

    public async execute({id, title, completed}: EntityTodoListInterface): Promise<Object | undefined> {

        const todoListRepository = new TodoListRepository();
        const todoList = await todoListRepository.findById(id);

        if (!todoList) {
            return {
                statusCode: 400,
                status: 'error',
                message: 'Todo list not found.'
            }
        }

        return await todoListRepository.saveById({
            id,
            title,
            completed
        });
    }
}

export default UpdateTodoListService;