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
			<main className='items-center min-h-screen px-6 lg:px-32 text-black'>
				<section className='my-20 xl:w-8/12'>
					<h1 className='text-3xl lg:text-5xl font-extrabold text-black-500'>
						<a className='auburn_blue'>ACM</a>
						<br />
						<a className='auburn_orange'>Auburn</a>
					</h1>
					<p className='font-bold mb-1'>Auburn University Student Chapter</p>
					<p className="">
						War Eagle! The Association for Computing Machinery (ACM) is an international society for scientific computing. We are a local branch whose goal is to serve the students of Auburn’s campus through peer instruction offered by our expanse of clubs. We provide our members the chance to interact with students of similar interests, while also connecting them with faculty and recruiters for job, internship, and research opportunities.
					</p>
				</section>
				<div className='my-10'>
					<div>
						<h2 className='py-4 text-2xl lg:text-4xl text-black-500'>
							Get Involved Today!
						</h2>
						<p className='max-w-md auburn_blue'><a href="https://discord.gg/prNnwtV">Join our Discord &rarr;</a></p>
						<p className='max-w-md auburn_blue'><a href="https://aub.ie/acm-mailing">Subscribe to our Mailing List &rarr;</a></p>
						<p className='max-w-md auburn_blue'><a href="https://auburn.campuslabs.com/engage/organization/acm">Sign up on AU Involve &rarr;</a></p>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
