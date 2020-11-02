import styles from '../../styles/Home.module.css'
import SocialLinks from '../SocialLinks'

export default function About() {
	let currentYear = new Date().getFullYear()
	return (
		<div>
			<main className={styles.container}>
				<h1 className={styles.title}>
					<span className={styles.auburn_orange}>About</span>{' '}
					<span className={styles.auburn_blue}>Us</span>
				</h1>

				<p className={styles.description}>
					ACM Student Chapter is the international Association for Computing
					Machinery's student society which provides opportunities to students
					for networking, learn together and share their knowledge. Its main
					focus is on building and developing members' passion for computer
					science.
				</p>
				<div className={styles.section}>
					<div className={styles.card}>
						<h2>Officers/Faculty Sponsor</h2>
					</div>
					<div className={styles.people}>
						<div className={styles.person}>
							<center>
								<img
									src='https://placekitten.com/1000/1000'
									alt='Connor Johnston'
								/>
							</center>
							<h5>Connor Johnston</h5>
							<p>President</p>
						</div>
						<div className={styles.person}>
							<center>
								<img
									src='https://placekitten.com/1000/1001'
									alt='Hudson Chromy'
								/>
							</center>
							<h5>Hudson Chromy</h5>
							<p>Vice President</p>
						</div>
						<div className={styles.person}>
							<center>
								<img
									src='https://placekitten.com/1001/1002'
									alt='Josh Coward'
								/>
							</center>
							<h5>Josh Coward</h5>
							<p>Secretary</p>
						</div>
						<div className={styles.person}>
							<center>
								<img
									src='https://placekitten.com/1000/1003'
									alt='Carson Barnett'
								/>
							</center>
							<h5>Carson Barnett</h5>
							<p>Treasurer</p>
						</div>
					</div>
				</div>

				<div className={styles.section}>
					<div className={styles.card}>
						<h2>Clubs/Activities</h2>
						<table>
							<tr>
								<td>Competitive Programming Team </td>
								<td>- The Competitive Programming Team</td>
							</tr>
							<tr>
								<td>FCPT </td>
								<td>- Beginner friendly competitive programming </td>
							</tr>
							<tr>
								<td>EHC </td>
								<td>- Ethical Hacking Club </td>
							</tr>
							<tr>
								<td>AI </td>
								<td>- Artificial Intelligence Club </td>
							</tr>
							<tr>
								<td>Talks </td>
								<td>- Tech talks from tech companies </td>
							</tr>
							<tr>
								<td>Mock Interviews </td>
								<td>- Monthly mock inteviews </td>
							</tr>
							<tr>
								<td>Hackathon </td>
								<td>- yearly Auburn Hackathon </td>
							</tr>
							<tr>
								<td>Tea Time </td>
								<td>- Weekly social meetings </td>
							</tr>
						</table>
					</div>
				</div>
				<div className={styles.section}>
					<div className={styles.card}>
						<h2>Our Vision</h2>
						<p>Be the very best (Like no one ever was) </p>
					</div>
				</div>
				<div className={styles.section}>
					<div className={styles.card}>
						<h2>Mission Statement</h2>
						<p>Travel across the land, searching far and wide</p>
					</div>
				</div>
				<div className={styles.section}>
					<div className={styles.card}>
						<h2>Join Today!</h2>
						<p>Join for many academic, social, and leadership opportunities</p>
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
