import styles from '../../styles/Home.module.css'
import SocialLinks from '../SocialLinks'
export default function Clubs() {
	let currentYear = new Date().getFullYear()
	return (
		<div>
			<main className={styles.container}>
				<h1 className={styles.title}>
					<span className={styles.auburn_orange}>Clubs</span>
				</h1>

				<div className={styles.section}>
					<div className={styles.card}>
						<h2>Competitive Programming Team </h2>
						<p>The Auburn Competitive Programming Team</p>
					</div>
				</div>

				<div className={styles.section}>
					<div className={styles.card}>
						<h2>FCPT </h2>
						<p>Beginner friendly competitive programming </p>
					</div>
				</div>
				<div className={styles.section}>
					<div className={styles.card}>
						<h2>Ethical Hacking Club </h2>
						<p>learn how to hack, ethically </p>
					</div>
				</div>

				<div className={styles.section}>
					<div className={styles.card}>
						<h2>Artificial Intelligence Club </h2>
						<p>learn how artificial intelligence and machine learning works </p>
					</div>
				</div>
			</main>
			<SocialLinks></SocialLinks>
			<footer className={styles.footer}>
				<a href='/'>{currentYear} © ACM Auburn</a>
			</footer>
		</div>
	)
}
