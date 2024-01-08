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
      // await fetchAllTodo()
    } catch (error) {
      console.log(error);
      console.log('delete suck');
    }
  };

  // handleEditTodo
  const editTodoById = async (id, newTodoObj) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/todos/${id}`, newTodoObj);
      console.log(response.data);
      // ยิงสำเร็จ
      // 1. Edit state
      const newTodoList = [...allTodos];
      const foundedIndex = newTodoList.findIndex((todo) => todo.id === id);
      if (foundedIndex !== -1) {
        newTodoList.splice(foundedIndex, 1, newTodoObj);
        setAllTodos(newTodoList);
      }
      // 2. fetch ใหม่
    } catch (error) {
      console.log(error);
    }
  };
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
