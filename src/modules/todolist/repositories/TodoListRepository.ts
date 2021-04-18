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

    public async saveById({id, title, completed}: EntityTodoListInterface): Promise<Object | undefined> {

        const findTodoListIndex = todoList.findIndex(todo => todo.id == id);

        const saveByIdTodoList = {
            id,
            title,
            completed
        }

        todoList[findTodoListIndex] = saveByIdTodoList;

        return saveByIdTodoList;
    }
}

export default TodoListRepository;