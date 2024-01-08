import Button from './Button';
import styles from './TodoForm.module.scss';

function TodoForm() {
  return (
    <form className={styles.form}>
      <div className={styles.form__task}>
        <input type='text' />
      </div>
      <div className={styles.form__date}>
        <input type='date' />
      </div>
      <div className={styles.form__action}>
        <div className={styles.form__action__container}>
          <Button variant='secondary'>Cancel</Button>
          <Button variant='primary'>Add task</Button>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
