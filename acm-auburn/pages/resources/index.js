import styles from '../../styles/Home.module.css'
import SocialLinks from '../SocialLinks'

export default function Resources() {
	let currentYear = new Date().getFullYear()
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>
					<span className={styles.auburn_blue}>Resources</span>
				</h1>
				<div className={styles.card}>
					<a href='https://discord.gg/prNnwtV' className={styles.card}>
						<h3>Discord &rarr;</h3>
					</a>
					<a href='#' className={styles.card}>
						<h3>Mailing list &rarr;</h3>
					</a>
					<a href='#' className={styles.card}>
						<h3>Code of Conduct &rarr;</h3>
					</a>
					<a
						href='https://open.kattis.com/universities/auburn.edu'
						className={styles.card}>
						<h3>Auburn Kattis Leaderboard &rarr;</h3>
					</a>
					<a href='#' className={styles.card}>
						<h3>Mock Interview Sign up &rarr;</h3>
					</a>
					<a href='#' className={styles.card}>
						<h3>Membership sign up (when established) &rarr;</h3>
					</a>
				</div>
			</main>
			<SocialLinks></SocialLinks>
			<footer className={styles.footer}>
				<a href='/'>{currentYear} © ACM Auburn</a>
			</footer>
		</div>
	)
}
