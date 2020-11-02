import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SocialLinks from './SocialLinks'

export default function Home() {
	let currentYear = new Date().getFullYear()
	return (
		<div className={styles.container}>
			<Head>
				<title>ACM Auburn</title>
				<link rel='icon' href='/acm.svg' />
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&display=swap'
					rel='stylesheet'></link>
			</Head>

			<main className={styles.container}>
				<h1 className={styles.title}>
					<span className={styles.auburn_orange}>ACM</span>{' '}
					<span className={styles.auburn_blue}>Auburn</span>
				</h1>

				<p className={styles.description}>
					Association for Computing Machinery Auburn University Student Chapter
				</p>

				<div className={styles.section}>
					<div className={styles.card}>
						<a href='/about'>About Us &rarr;</a>
						<p>
							ACM Student Chapter is the international Association for Computing
							Machinery's student society which provides opportunities to
							students for networking, learn together and share their knowledge.
							Its main focus is on building and developing members' passion for
							computer science.
						</p>
					</div>
				</div>

				<div className={styles.section}>
					<div className={styles.card}>
						<a href='/calendar'>Calendar &rarr;</a>
						<p>
							Single source of truth for all clubs meeting times, events, and
							tech talks.
						</p>
					</div>
				</div>

				<div className={styles.section}>
					<div className={styles.card}>
						<a href='/clubs'>Clubs &rarr;</a>
						<p>
							We have three clubs under ACM. The Artificial Intelligence club, the Competitive Programming Team, and the Ethical
							Hacking club.
						</p>
					</div>
				</div>

				<div className={styles.section}>
					<div className={styles.card}>
						<a href='/resources'>Resources &rarr;</a>
						<p>Discord, emails, and social media.</p>
					</div>
				</div>
				<div className={styles.section}></div>
			</main>

			<SocialLinks />
			<footer className={styles.footer}>
				<a href='/'>{currentYear} © ACM Auburn</a>
			</footer>
		</div>
	)
}
