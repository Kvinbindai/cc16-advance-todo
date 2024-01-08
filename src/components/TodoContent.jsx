import React from 'react';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoContent() {
  return (
    <div>
      <TodoHeader title='Inbox' />
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default TodoContent;
