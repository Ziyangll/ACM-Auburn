import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
export default function Resources() {
	return (
		<div className=''>
			<NavBar />
			<main className='items-center h-screen px-6 lg:px-32 text-black'>
				<section className='my-20 xl:w-8/12'>
					<h1 className='text-3xl lg:text-5xl font-extrabold text-black-500'>
						<a className='auburn_blue'>Resources</a>
					</h1>
					<p className='font-bold mb-1 '>Helpful resources</p>
				</section>
				<div className="my-10">
					<h3><a href='https://discord.gg/prNnwtV'>
						Discord &rarr;
					</a></h3>
					<h3><a href='https://aub.ie/acm-mailing'>
						Mailing list &rarr;
					</a></h3>
					<h3><a href='#' className=''>
						Code of Conduct &rarr;
					</a></h3>
					<h3><a
						href='https://open.kattis.com/universities/auburn.edu'
						className=''>
						Auburn Kattis Leaderboard &rarr;
					</a>
					</h3>
					<h3><a href='#' className=''>
						Mock Interview Sign up &rarr;
					</a></h3>
					<h3><a href='#' className=''>
						Membership sign up (when established) &rarr;
					</a></h3>
				</div>
				<div className="my-10">
					<h3><a href='https://education.github.com/pack/offers' className=''>
						Github Student Developer Pack &rarr;
					</a></h3>
					
				</div>
			</main>
			<Footer />
		</div>
	);
}
