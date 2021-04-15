import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
export default function About() {
	return (
		<div>
			<NavBar />
			<main className='items-center px-6 lg:px-32 min-h-screen text-black'>
				<section className='my-20 xl:w-8/12'>
					<h1 className='text-3xl lg:text-5xl font-extrabold text-black-500'>
						<a className='auburn_blue'>Calendar</a>
					</h1>
				</section>
				<div>
					<p className='max-w-md auburn_blue'><a href="https://calendar.google.com/calendar/u/0/r?cid=YWNtYXVidXJuQGdtYWlsLmNvbQ">Our Google Calendar &rarr;</a></p>
				</div>
			</main>
			<Footer />
		</div>
	);
}
