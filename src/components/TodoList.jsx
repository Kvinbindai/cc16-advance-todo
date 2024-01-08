import TodoItem from './TodoItem';
import styles from './TodoList.module.scss';
import mockTodos from '../data/todos.json';

function TodoList() {
  return (
    <ul>
      {mockTodos.slice(0, 20).map((todo) => (
        <TodoItem key={todo.id} task={todo.task} status={todo.status} date={todo.date} />
        //  <TodoItem {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;
