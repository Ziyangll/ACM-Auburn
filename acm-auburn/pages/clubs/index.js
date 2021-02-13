import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
export default function Clubs() {
	return (
		<div>
			<NavBar />
			<main className='items-center px-6 lg:px-32 text-black'>
				<section className='my-20 w-screen md:w-9/12 xl:w-8/12'>
					<span className='font-bold uppercase tracking-widest'></span>
					<h1 className='text-3xl lg:text-5xl font-extrabold text-black-500'>
						<a className='auburn_blue'>Clubs</a>
					</h1>
					<p className='font-bold mb-1 '>Auburn University Student Chapter</p>
					<p className='max-w-md'>
						Information for the many different clubs under ACM Auburn.
					</p>
				</section>

				<div className='my-10'>
					<h2 className='py-4 text-2xl lg:text-4xl text-black-500'>
						Competitive Programming Team
					</h2>
					<p>The Auburn Competitive Programming Team</p>
				</div>
				<div className='my-10'>
					<h2 className='py-4 text-2xl lg:text-4xl text-black-500'>
						FCPT{" "}
					</h2>
					<p>Beginner friendly competitive programming </p>
				</div>
				<div className='my-10'>
					<h2 className='py-4 text-2xl lg:text-4xl text-black-500'>
						Ethical Hacking Club{" "}
					</h2>
					<p>learn how to hack, ethically </p>
				</div>
				<div className='my-10'>
					<h2 className='py-4 text-2xl lg:text-4xl text-black-500'>
						Artificial Intelligence Club{" "}
					</h2>
					<p>learn how artificial intelligence and machine learning works </p>
				</div>
			</main>
			<Footer />
		</div>
	);
}
