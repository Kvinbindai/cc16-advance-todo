import styles from './Button.module.scss';

function Button({ children, onClick, variant = 'primary', ...props }) {
  console.log(props);
  let finalBg = variant === 'primary' ? styles.primary : styles.secondary;
  return (
    <button
      className={`${styles.button} ${finalBg}`}
      onClick={onClick}
      {...props} // {type:"button",role:"button"} => type="button" role="button"
    >
      {children}
    </button>
  );
}

export default Button;
