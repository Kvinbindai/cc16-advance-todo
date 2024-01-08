import React from 'react';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';

function TodoContent() {
  return (
    <div>
      <TodoHeader title='Inbox' />
      <TodoInput />
      <div>TodoList</div>
    </div>
  );
}

export default TodoContent;
