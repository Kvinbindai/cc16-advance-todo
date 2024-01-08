import React from 'react';
import Appbar from '../components/Appbar';
import AppLayout from '../layout/AppLayout';
import Sidebar from '../components/Sidebar';
import TodoContent from '../components/TodoContent';
import TodoContextProvider from '../context/TodoContext';

function TodoPage() {
  return (
    <>
      <Appbar />
      <TodoContextProvider>
        <AppLayout>
          <Sidebar />
          <TodoContent />
        </AppLayout>
      </TodoContextProvider>
    </>
  );
}

export default TodoPage;
