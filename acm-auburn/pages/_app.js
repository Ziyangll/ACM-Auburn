import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<html lang='en'>
			<div className='bg-gray-100'>
				<div className='mx-auto max-w-7xl '>
					<Component {...pageProps} />
				</div>
			</div>
		</html>
	);
}

export default MyApp;
