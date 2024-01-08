import TodoForm from './TodoForm';
import styles from './TodoInput.module.scss';
import { useState } from 'react';

function TodoInput() {
  const [isShow, setIsShow] = useState(false);

  const openForm = () => setIsShow(true);

  const closeForm = () => setIsShow(false);
  return (
    <>
      {!isShow ? (
        <div className={styles.container}>
          <button onClick={openForm}>+</button>
          <h5>Add task</h5>
        </div>
      ) : (
        <TodoForm onClose={closeForm} />
      )}
    </>
  );
}

export default TodoInput;
