import { useTodos } from '../context/TodoContext';
import TodoItem from './TodoItem';

function TodoList() {
  const { allTodos } = useTodos();
  return (
    <ul>
      {allTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
        //  <TodoItem {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;
