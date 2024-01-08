import styles from './TodoHeader.module.scss';
import Button from './Button';
function TodoHeader({ title = 'Inbox' }) {
  const now = new Date();
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  };
  return (
    <header className={styles.header}>
      {/* Title */}
      <div className={styles.title}>
        <h1>{title}</h1>
        <p>{now.toLocaleDateString('en-EN', options)}</p>
      </div>
      {/* Button Group */}
      <div className={styles.btn__group}>
        <Button>status </Button>
        <Button variant='secondary'>date </Button>
        <Button variant='secondary'>task </Button>
      </div>
    </header>
  );
}

export default TodoHeader;
