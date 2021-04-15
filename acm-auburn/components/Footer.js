export default function Footer() {
	let currentYear = new Date().getFullYear();
	return (
		<footer className='text-center'>
			<div className='socials'>
				<button className='fixed object-right-bottom bottom-6 right-6 px-0 py-0 md:px-2 md:py-3 rounded-2xl shadow bg-gray-100 hover:bg-white'>
					<a href='https://discord.gg/prNnwtV'>
						<img src='/discord.svg' alt='discord'></img>
					</a>
				</button>
			</div>
			<a href='/'>{currentYear} ACM Auburn</a>
		</footer>
	);
}
