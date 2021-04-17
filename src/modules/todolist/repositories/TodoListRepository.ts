import EntityTodoListInterface from '../interfaces/EntityTodoListInterface';
import todoList from '../entities';

class TodoListRepository {

    public async save({id, title, completed}: EntityTodoListInterface): Promise<Object> {

        const saveTodoList = {
            id,
            title,
            completed
        }

        todoList.push(saveTodoList);

        return saveTodoList;
    }

    public async findAll(): Promise<Array<EntityTodoListInterface>> {
        return todoList;
    }
}

export default TodoListRepository;