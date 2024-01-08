import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// s-1
const TodoContext = createContext();

// s-2 : Provider
export default function TodoContextProvider({ children }) {
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    fetchAllTodo();
  }, []);

  // get
  const fetchAllTodo = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/todos');
      setAllTodos(response.data.todos);
    } catch (err) {
      // handle catch
      console.log(err);
    }
  };

  // handleDelete
  const deleteTodoById = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/todos/${id}`);
      console.log('delete success');
      setAllTodos((cur) => [...cur].filter((todo) => todo.id !== id));
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
    <TodoContext.Provider value={{ allTodos, addTodo, editTodoById, deleteTodoById }}>
      {children}
    </TodoContext.Provider>
  );
}

// s-5 : custom Hook
export function useTodos() {
  return useContext(TodoContext);
  // return { allTodos, addTodo, editTodoById, deleteTodoById }
}
