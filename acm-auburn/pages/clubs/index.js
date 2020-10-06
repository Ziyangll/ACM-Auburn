import styles from '../../styles/Home.module.css';

export default function Clubs() {
  let currentYear = new Date().getFullYear();
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>Clubs</h1>
        <div className={styles.grid}>
          <div className={styles.infocard}>
            <h3>Artifical Intelligence Club</h3>
            <p>...</p>
          </div>
          <div className={styles.infocard}>
            <h3>Competitive Programming Team</h3>
            <p>Include FCPT here</p>
          </div>
          <a href='https://ehc.auburn.edu/' className={styles.card}>
            <h3>Ethical Hacking Club &rarr;</h3>
            <p>...</p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a href='/'>{currentYear} © ACM Auburn</a>
      </footer>
    </div>
  );
}
