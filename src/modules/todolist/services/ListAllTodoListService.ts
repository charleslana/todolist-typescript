import TodoListRepository from '../repositories/TodoListRepository';

class ListAllTodoListService {

    public async execute(): Promise<Array<Object>> {

        const todoListRepository = new TodoListRepository();

        return await todoListRepository.findAll();
    }
}

export default ListAllTodoListService;