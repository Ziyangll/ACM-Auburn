import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
export default function Calendar() {
	return (
		<div>
			<NavBar />
			<main className='h-screen flex items-center px-6 lg:px-32 text-black relative'>
				<section className='w-screen md:w-9/12 xl:w-8/12'>
					<span className='font-bold uppercase tracking-widest'></span>
					<h1 className='text-3xl lg:text-5xl font-extrabold text-black-500'>
						<a className='auburn_blue'>Calendar</a>
					</h1>
					<p className='font-bold mb-1'>Auburn University Student Chapter</p>
					<p>
						Single source of truth for all clubs meeting times, events, and tech
						talks.
					</p>
				</section>
			</main>
			<Footer />
		</div>
	);
}
