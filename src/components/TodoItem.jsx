import { useState } from 'react';
import TodoForm from './TodoForm';
import styles from './TodoItem.module.scss';
import { HiCheck, HiOutlinePencil, HiTrash } from 'react-icons/hi';
import { useTodos } from '../context/TodoContext';

function TodoItem({ todo }) {
  const { editTodoById, deleteTodoById } = useTodos();
  const [isEdit, setIsEdit] = useState(false);

  const onClose = () => setIsEdit(false);
  const handleEdit = () => setIsEdit(true);
  const updateStatus = () => {
    const updatedTodo = { ...todo, status: !todo.status };
    editTodoById(todo.id, updatedTodo);
  };
  return (
    <>
      {!isEdit ? (
        <li className={styles.todo__item}>
          <div className={styles.todo__detail}>
            <span className={styles.todo__status} onClick={updateStatus}>
              <HiCheck
                className={`${styles.todo__status__icon} ${todo.status && `${styles.done}`}`}
              />
            </span>
            <p>{todo.task}</p>
          </div>
          <div className={styles.todo__action}>
            <p>{todo.date}</p>
            <span>
              <HiOutlinePencil onClick={handleEdit} />
            </span>
            <span onClick={() => deleteTodoById(todo.id)}>
              <HiTrash />
            </span>
          </div>
        </li>
      ) : (
        <TodoForm confirmText='Edit Task' oldTodo={todo} onClose={onClose} />
      )}
    </>
  );
}

export default TodoItem;
