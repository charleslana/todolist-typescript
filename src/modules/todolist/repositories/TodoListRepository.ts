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

    public async findById(id: string): Promise<Object | undefined> {

        const findTodoList = todoList.filter(todo => todo.id.includes(id));
        return findTodoList[0];
    }
}

export default TodoListRepository;