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
      <AppLayout>
        <TodoContextProvider>
          <Sidebar />
          {/* Filter : TODO */}
          <TodoContent />
          {/* CRUD : TODO */}
        </TodoContextProvider>
      </AppLayout>
    </>
  );
}

export default TodoPage;
