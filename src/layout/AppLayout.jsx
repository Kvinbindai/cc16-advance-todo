import styles from './AppLayout.module.scss';

function AppLayout({ children }) {
  const [left, rigth] = children;
  return (
    <main className={styles.app__content}>
      <aside className={styles.sidebar}>{left}</aside>
      <section className={styles.content}>{rigth}</section>
    </main>
  );
}

export default AppLayout;
