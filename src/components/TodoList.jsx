import { useEffect } from 'react';
import { useState } from 'react';
import TodoItem from './TodoItem';
import styles from './TodoList.module.scss';
import mockTodos from '../data/todos.json';
import axios from 'axios';
// axios.get(url) => Promise

function TodoList() {
  const [allTodos, setAllTodos] = useState([]);
  // const fetchAllTodo = () => {
  //   fetch('http://localhost:8080/api/todos')
  //     .then((result) => result.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // };

  const fetchAllTodo = async () => {
    try {
      // handle then
      // const result = await fetch('http://localhost:8080/api/todos');
      // const data = await result.json();
      const response = await axios.get('http://localhost:8080/api/todos');
      setAllTodos(response.data.todos);
    } catch (err) {
      // handle catch
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllTodo();
  }, []);

  // handleDelete
  const deleteTodoById = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/todos/${id}`);
      console.log('delete success');
      // 1. update AllTodo หน้าบ้านใหม่
      setAllTodos((cur) => [...cur].filter((todo) => todo.id !== id));
      // 2. fecth ใหม่
    } catch (error) {
      console.log(error);
      console.log('delete suck');
    }
  };
  return (
    <ul>
      {allTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          task={todo.task}
          status={todo.status}
          date={todo.date}
          deleteTodoById={deleteTodoById}
        />
        //  <TodoItem {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;
