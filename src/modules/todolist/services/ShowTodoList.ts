import TodoListRepository from '../repositories/TodoListRepository';

class ShowTodoList {

    public async execute(id: string): Promise<Object | undefined> {

        const todoListRepository = new TodoListRepository();
        const findTodoList = await todoListRepository.findById(id);

        if (!findTodoList) {
            return {
                statusCode: 400,
                status: 'error',
                message: 'Todo list not found.'
            }
        }

        return findTodoList;
    }
}

export default ShowTodoList;