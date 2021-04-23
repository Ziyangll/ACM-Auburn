import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
export default function Resources() {
	return (
		<div>
			<Head>
				<title>ACM Auburn Clubs</title>
				<meta
					name='description'
					content='ACM Auburn University student chapter official website resources page'
				/>
				<meta name='keywords' content='ACM Auburn resources' />
				<meta name='author' content='Ziyang Li' />
				<link rel='icon' href='/acm.svg' />
			</Head>
			<NavBar />
			<main className='items-center px-6 lg:px-32 min-h-screen text-black'>
				<section className='my-20 xl:w-8/12'>
					<h1 className='text-3xl lg:text-5xl font-extrabold text-black-500'>
						<a className='auburn_blue'>Resources</a>
					</h1>
					<p className='font-bold mb-1 '>Helpful resources</p>
				</section>
				<div className="my-10">
					<h3><a href='https://discord.gg/prNnwtV' target="_blank" rel="noopener noreferrer">
						Discord &rarr;
					</a></h3>
					<h3><a href='https://aub.ie/acm-mailing' target="_blank" rel="noopener noreferrer">
						Mailing list &rarr;
					</a></h3>
					<h3><a href='#' className='' target="_blank" rel="noopener noreferrer">
						Code of Conduct &rarr;
					</a></h3>
					<h3><a
						href='https://open.kattis.com/universities/auburn.edu'
						target="_blank" rel="noopener noreferrer">
						Auburn Kattis Leaderboard &rarr;
					</a>
					</h3>
					<h3><a href='#' target="_blank" rel="noopener noreferrer">
						Mock Interview Sign up &rarr;
					</a></h3>
					<h3><a href='#' target="_blank" rel="noopener noreferrer">
						Membership sign up (when established) &rarr;
					</a></h3>
				</div>
				<div className="my-10">
					<h3><a href='https://education.github.com/pack/offers' target="_blank" rel="noopener noreferrer">
						Github Student Developer Pack &rarr;
					</a></h3>

				</div>
			</main>
			<Footer />
		</div>
	);
}
