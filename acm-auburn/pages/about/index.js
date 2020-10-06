import styles from '../../styles/Home.module.css';

export default function About() {
  let currentYear = new Date().getFullYear();
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>About Us</h1>

        <p className={styles.description}>
          ACM Student Chapter is the international Association for Computing
          Machinery's student society which provides opportunities to students
          for networking, learn together and share their knowledge. Its main
          focus is on building and developing members' passion for computer
          science.
        </p>
      </main>
      <div className={styles.info}>
        <h2>Officers/Faculty Sponsor</h2>
        <p>Name Contact info Picture</p>
        <h2>Clubs/Activities</h2>
        <div className={styles.infogrid}>
          <div>FCPT</div>
          <div>CPT</div>
          <div>EHC</div>
          <div>AI</div>
          <div>Talks</div>
          <div>Interviews</div>
          <div>Hackathon</div>
          <div>Tea Time</div>
        </div>
        <h2>Our Vision</h2>
        <p>...</p>
        <h2>Mission Statement</h2>
        <p>...</p>
        <h2>Why Join?</h2>
        <p>Academic Social Networking Leadership</p>
      </div>
      <footer className={styles.footer}>
        <a href='/'>{currentYear} © ACM Auburn</a>
      </footer>
    </div>
  );
}
