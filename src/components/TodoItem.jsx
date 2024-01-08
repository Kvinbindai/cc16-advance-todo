import { useState } from 'react';
import TodoForm from './TodoForm';
import styles from './TodoItem.module.scss';
import { HiCheck, HiOutlinePencil, HiTrash } from 'react-icons/hi';

function TodoItem({ todo, deleteTodoById, editTodoById }) {
  const [isEdit, setIsEdit] = useState(false);

  const onClose = () => setIsEdit(false);
  const handleEdit = () => setIsEdit(true);
  return (
    <>
      {!isEdit ? (
        <li className={styles.todo__item}>
          <div className={styles.todo__detail}>
            <span className={styles.todo__status}>
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
        <TodoForm confirmText='Edit Task' oldTodo={todo} onClose={onClose} onEdit={editTodoById} />
      )}
    </>
  );
}

export default TodoItem;
