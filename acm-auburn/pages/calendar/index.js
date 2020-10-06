import styles from '../../styles/Home.module.css';

export default function Calendar() {
  let currentYear = new Date().getFullYear();
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>Calendar</h1>
      </main>
      <footer className={styles.footer}>
        <a href='/'>{currentYear} © ACM Auburn</a>
      </footer>
    </div>
  );
}
