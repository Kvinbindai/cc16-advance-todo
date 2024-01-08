import { useState, useEffect } from 'react';
import styles from './TodoContent.module.scss';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import axios from 'axios';

function TodoContent() {
  const [allTodos, setAllTodos] = useState([]);
  // get
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
    console.log(id, newTodoObj);
    try {
      const response = await axios.put(`http://localhost:8080/api/todos/${id}`, newTodoObj);
      console.log(response);
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

  // handleAddTodo
  const addTodo = async (newTodoObj) => {
    console.log(newTodoObj);
    try {
      const response = await axios.post('http://localhost:8080/api/todos', newTodoObj);
      console.log(response.data.todo);
      // 1 แก้ไข AllTodos
      setAllTodos((cur) => [response.data.todo, ...cur]);
      // 2 fetch ใหม่
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.todo__container}>
      <TodoHeader title='Inbox' />
      <TodoInput addTodo={addTodo} />
      <TodoList allTodos={allTodos} deleteTodoById={deleteTodoById} editTodoById={editTodoById} />
    </div>
  );
}

export default TodoContent;
