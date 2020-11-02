import styles from '../styles/Home.module.css'

export default function SocialLinks() {
	return (
		<div className={styles.socials}>
			<a href='https://discord.gg/prNnwtV'>
				<img src='/discord.svg' alt='discord'></img>
			</a>

			<a href='https://twitter.com/AuburnACM'>
				<img src='/twitter.png' alt='twitter'></img>
			</a>
			<a href='https://www.facebook.com/auburnu/'>
				<img src='/facebook.png' alt='facebook'></img>
			</a>
		</div>
	)
}
