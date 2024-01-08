import { useState } from 'react';
import Button from './Button';
import styles from './TodoForm.module.scss';

function TodoForm({ onClose }) {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() === '') {
      setIsError(true);
    } else {
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
            Add task
          </Button>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
