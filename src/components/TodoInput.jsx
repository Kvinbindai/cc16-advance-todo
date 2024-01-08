import TodoForm from './TodoForm';
import styles from './TodoInput.module.scss';
import { useState } from 'react';

function TodoInput() {
  const [isShow, setIsShow] = useState(true);

  const toggleForm = () => setIsShow(!isShow);
  return (
    <>
      {!isShow ? (
        <div className={styles.container}>
          <button onClick={toggleForm}>+</button>
          <h5>Add task</h5>
        </div>
      ) : (
        <TodoForm />
      )}
    </>
  );
}

export default TodoInput;
