import styles from './Button.module.scss';

function Button({ children, onClick, variant = 'primary' }) {
  let finalBg = variant === 'primary' ? styles.primary : styles.secondary;
  return (
    <button className={`${styles.button} ${finalBg}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
