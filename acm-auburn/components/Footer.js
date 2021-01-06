export default function Footer() {
	let currentYear = new Date().getFullYear();
	return (
		<footer className='text-center'>
			<div className='socials'>
				<button className='fixed object-right-bottom bottom-4 right-4 px-2 py-2 rounded-2xl shadow hover:bg-white w-auto h-auto transition ease-in duration-200 focus:outline-none'>
					<a className='bg-grey-100' href='https://discord.gg/prNnwtV'>
						<img src='/discord.svg' alt='discord'></img>
					</a>
				</button>
			</div>
			<a href='/'>{currentYear} ACM Auburn</a>
		</footer>
	);
}
