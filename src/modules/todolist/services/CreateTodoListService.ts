import TodoListRepository from '../repositories/TodoListRepository';
import CreateTodoListInterface from '../interfaces/CreateTodoListInterface';

class CreateTodoListService {

    public async execute({title, completed}: CreateTodoListInterface): Promise<Object> {

        const todoListRepository = new TodoListRepository();
        const randomId = Math.floor(Math.random() * 999);

        return await todoListRepository.save({
            id: randomId,
            title,
            completed
        });
    }
}

export default CreateTodoListService;