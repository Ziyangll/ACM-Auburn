import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<div>
			<Head>
				<title>ACM Auburn</title>
				<meta
					name='description'
					content='ACM Auburn University student chapter official website'
				/>
				<meta name='keywords' content='ACM Auburn' />
				<meta name='author' content='Ziyang Li' />
				<link rel='icon' href='/acm.svg' />
			</Head>
			<NavBar />
			<main className='h-screen flex items-center px-6 lg:px-32 text-black relative'>
				<section className='w-screen md:w-9/12 xl:w-8/12'>
					<span className='font-bold uppercase tracking-widest'></span>
					<h1 className='text-3xl lg:text-5xl font-extrabold text-black-500'>
						<a className='auburn_blue'>ACM</a>
						<br />
						<a className='auburn_orange'>Auburn</a>
					</h1>
					<p className='font-bold mb-1'>Auburn University Student Chapter</p>
					<p>
						We have the best clubs to quickly jumpstart your career and connect
						with your peers.
					</p>
				</section>
			</main>

			<Footer />
		</div>
	);
}
