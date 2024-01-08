import { useState } from 'react';
import TodoForm from './TodoForm';
import styles from './TodoItem.module.scss';
import { HiCheck, HiOutlinePencil, HiTrash } from 'react-icons/hi';

function TodoItem({ task, status, date }) {
  const [isEdit, setIsEdit] = useState(false);

  const onClose = () => setIsEdit(false);
  const handleEdit = () => setIsEdit(true);
  return (
    <>
      {!isEdit ? (
        <li className={styles.todo__item}>
          <div className={styles.todo__detail}>
            <span className={styles.todo__status}>
              <HiCheck className={`${styles.todo__status__icon} ${status && `${styles.done}`}`} />
            </span>
            <p>{task}</p>
          </div>
          <div className={styles.todo__action}>
            <p>{date}</p>
            <span>
              <HiOutlinePencil onClick={handleEdit} />
            </span>
            <span>
              <HiTrash />
            </span>
          </div>
        </li>
      ) : (
        <TodoForm confirmText='Edit Task' onClose={onClose} />
      )}
    </>
  );
}

export default TodoItem;
