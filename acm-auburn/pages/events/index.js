import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
export default function Clubs() {
	return (
		<div>
			<NavBar />
			<main className='items-center h-screen px-6 lg:px-32 text-black'>
				<section className='my-20 xl:w-8/12'>
					<h1 className='text-3xl lg:text-5xl font-extrabold text-black-500'>
						<a className='auburn_blue'>Events</a>
					</h1>
					<p className='font-bold mb-1 '>
						Information for the many different events under ACM Auburn
					</p>
				</section>
				<div className='my-10'>
					<h2 className='py-4 text-2xl lg:text-4xl text-black-500'>
						Auburn Hacks
					</h2>
					<p>...</p>
				</div>
				<div className='my-10'>
					<h2 className='py-4 text-2xl lg:text-4xl text-black-500'>
						Tech Talks
					</h2>
					<p>...</p>
				</div>
				<div className='my-10'>
					<h2 className='py-4 text-2xl lg:text-4xl text-black-500'>
						Tea Time
					</h2>
					<p>...</p>
				</div>
			</main>
			<Footer />
		</div>
	);
}
