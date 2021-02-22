import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
export default function About() {
	return (
		<div>
			<NavBar />
			<main className='items-center h-screen px-6 lg:px-32 text-black'>
				<section className='my-20 w-screen md:w-9/12 xl:w-8/12'>
					<span className='font-bold uppercase tracking-widest'></span>
					<h1 className='text-3xl lg:text-5xl font-extrabold text-black-500'>
						<a className='auburn_blue'>Calendar</a>
					</h1>

					<p className='max-w-sm'>
						Calendar here
					</p>
				</section>
			</main>
			<Footer />
		</div>
	);
}
