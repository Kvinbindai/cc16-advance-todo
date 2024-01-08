import TodoItem from './TodoItem';

function TodoList({ allTodos, deleteTodoById, editTodoById }) {
  return (
    <ul>
      {allTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodoById={deleteTodoById}
          editTodoById={editTodoById}
        />
        //  <TodoItem {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;
