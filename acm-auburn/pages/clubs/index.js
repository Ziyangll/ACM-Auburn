import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
export default function Clubs() {
	return (
		<div>
			<NavBar />
			<main className='items-center h-screen px-6 lg:px-32 text-black'>
				<section className='my-20 xl:w-8/12'>
					<h1 className='text-3xl lg:text-5xl font-extrabold text-black-500'>
						<a className='auburn_blue'>Clubs</a>
					</h1>
					<p className='mb-1 '>
						The goal of our clubs is to cover a variety of interesting topics adjacent to the Auburn Computer Science and Software Engineering (CSSE) curriculum, while expanding and exploring these topics at a deeper level. Through peer instruction and member interaction, we aim to equip our attendees with the necessary skills to impress recruiters by displaying a diverse skill set and to pass technical interviews with flying colors.
					</p>
				</section>
				<div className='my-10'>
					<h2 className='py-4 text-2xl lg:text-4xl text-black-500'>
						Competitive Programming Team
					</h2>
					<p className='font-bold mb-1 '>Competition</p>
					<p className="xl:w-8/12">Through weekly meetings focused on lectures and problem solving, CPT prepares to compete in collegiate programming competitions. We study a range of data structures and algorithms along with their applications. Our primary form of practice takes place on <a className="text-blue-500" href="https://open.kattis.com">Kattis</a>, a repository of problems, complete with a judge and a platform to host competitions. Additionally to our weekly meetings, we regularly host mock competitions and mock technical interview practice for all members of ACM. We primarily solve our problems in Java, Python, or C++.</p>
					<p className='font-bold mb-1 my-5'>Fundamentals</p>
					<p className="xl:w-8/12">Taking a step back from the competition level team, FCPT caters to those new to or unfamiliar with programming. The program acts as a fast-track through the fundamentals of a single language, typically Java, so that members can be prepared to compete at a high level. We cover the basic data structures of a language, a few basic algorithms, and how to use the command line.</p>
				</div>
				<div className='my-10'>
					<h2 className='py-4 text-2xl lg:text-4xl text-black-500'>
						Ethical Hacking Club
					</h2>
					<p>...</p>
				</div>
				<div className='my-10'>
					<h2 className='py-4 text-2xl lg:text-4xl text-black-500'>
						Artificial Intelligence Club
					</h2>
					<p>...</p>
				</div>
			</main>
			<Footer />
		</div>
	);
}
