import { useState } from 'react';
import Button from './Button';
import styles from './TodoForm.module.scss';
import { useTodos } from '../context/TodoContext';

function TodoForm({ oldTodo, onClose, confirmText }) {
  const { addTodo, editTodoById } = useTodos();
  const [text, setText] = useState(oldTodo?.task || '');
  const [date, setDate] = useState(oldTodo?.date || '');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() === '') {
      setIsError(true);
    } else {
      // Can Edit or Create // แยกโหมด edit ด้วย oldTodo
      if (oldTodo) {
        const newTodoObj = { ...oldTodo, task: text, date: date };
        editTodoById(newTodoObj.id, newTodoObj);
      } else {
        // TASK : convert Date Format
        // let dateInput = date || new Date().now();
        addTodo({ task: text, status: false, date: '2024-01-08' });
      }

      setIsError(false);
      onClose();
    }
  };

  const handleChangeText = (event) => {
    setText(event.target.value);
    setIsError(false);
  };

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form__task}>
        <input type='text' value={text} onChange={handleChangeText} />
        {isError && <p className={styles.form__error}>task name is requried</p>}
      </div>
      <div className={styles.form__date}>
        <input type='date' value={date} onChange={handleChangeDate} />
      </div>
      <div className={styles.form__action}>
        <div className={styles.form__action__container}>
          <Button type='button' role='button' variant='secondary' onClick={onClose}>
            Cancel
          </Button>
          <Button type='submit' role='submit' variant='primary'>
            {confirmText}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
