import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
export default function Resources() {
	return (
		<div className=''>
			<NavBar />
			<main className='items-center px-6 lg:px-32 text-black'>
				<section className='my-20 w-screen md:w-9/12 xl:w-8/12'>
					<span className='font-bold uppercase tracking-widest'></span>
					<h1 className='text-3xl lg:text-5xl font-extrabold text-black-500'>
						<a className='auburn_blue'>Resources</a>
					</h1>
					<p className='font-bold mb-1 '>Auburn University Student Chapter</p>
					<p className='max-w-md'>Helpful resources.</p>
				</section>
				<div className=''>
					<a href='https://discord.gg/prNnwtV' className=''>
						<h3>Discord &rarr;</h3>
					</a>
					<a href='#' className=''>
						<h3>Mailing list &rarr;</h3>
					</a>
					<a href='#' className=''>
						<h3>Code of Conduct &rarr;</h3>
					</a>
					<a
						href='https://open.kattis.com/universities/auburn.edu'
						className=''>
						<h3>Auburn Kattis Leaderboard &rarr;</h3>
					</a>
					<a href='#' className=''>
						<h3>Mock Interview Sign up &rarr;</h3>
					</a>
					<a href='#' className=''>
						<h3>Membership sign up (when established) &rarr;</h3>
					</a>
				</div>
			</main>
			<Footer />
		</div>
	);
}
