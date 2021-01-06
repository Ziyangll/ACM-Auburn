import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<div className='bg-gray-100'>
			<div className='mx-auto max-w-7xl '>
				<Component {...pageProps} />
			</div>
		</div>
	);
}

export default MyApp;
