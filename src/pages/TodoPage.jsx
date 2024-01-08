import React from 'react';
import Appbar from '../components/Appbar';
import AppLayout from '../layout/AppLayout';
import Sidebar from '../components/Sidebar';
import TodoContent from '../components/TodoContent';

function TodoPage() {
  return (
    <>
      <Appbar />
      <AppLayout>
        <Sidebar />
        <TodoContent />
      </AppLayout>
    </>
  );
}

export default TodoPage;
