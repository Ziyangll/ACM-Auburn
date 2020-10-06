import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  let currentYear = new Date().getFullYear()
  return (
    <div className={styles.container}>
      <Head>
        <title>ACM Auburn</title>
        <link rel='icon' href='/acm.svg' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to ACM Auburn</h1>

        <p className={styles.description}>
          Association for Computing Machinery - Auburn university student
          chapter
        </p>

        <div className={styles.grid}>
          <a href='/about' className={styles.card}>
            <h3>About Us &rarr;</h3>
            <p>Find informations about ACM Auburn.</p>
          </a>
          <a href='/calendar' className={styles.card}>
            <h3>Calendar &rarr;</h3>
            <p>Club meeting times and events.</p>
          </a>
          <a href='/clubs' className={styles.card}>
            <h3>Clubs &rarr;</h3>
            <p>
              Artifical Intelligence, Competitive Programming, and Ethical
              Hacking.
            </p>
          </a>
          <a href='/resources' className={styles.card}>
            <h3>Resources &rarr;</h3>
            <p>Discord, emails, and social media.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='/'
          target='_blank'
          rel='noopener noreferrer'>
          {currentYear} © ACM Auburn
          
        </a>
      </footer>
    </div>
  );
}
