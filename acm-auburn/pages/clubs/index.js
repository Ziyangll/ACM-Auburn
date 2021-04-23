import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
export default function Clubs() {
	return (
		<div>
			<Head>
				<title>ACM Auburn Clubs</title>
				<meta
					name='description'
					content='ACM Auburn University student chapter official website clubs page'
				/>
				<meta name='keywords' content='ACM Auburn clubs' />
				<meta name='author' content='Ziyang Li' />
				<link rel='icon' href='/acm.svg' />
			</Head>
			<NavBar />
			<main className='items-center px-6 lg:px-32 min-h-screen text-black'>
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
					<p className="xl:w-8/12">Through weekly meetings focused on lectures and problem solving,
					CPT prepares to compete in collegiate programming competitions. We study a range of data structures
					and algorithms along with their applications. Our primary form of practice takes place on
					<a className="text-blue-500" href="https://open.kattis.com" target="_blank" rel="noopener noreferrer"> Kattis</a>, a repository of problems,
					complete with a judge and a platform to host competitions. Additionally to our weekly meetings,
					we regularly host mock competitions and mock technical interview practice for all members of ACM.
					We primarily solve our problems in Java, Python, or C++.</p>
					<p className='font-bold mb-1 my-5'>Fundamentals</p>
					<p className="xl:w-8/12">Taking a step back from the competition level team,
					FCPT caters to those new to or unfamiliar with programming.
					The program acts as a fast-track through the fundamentals of a single language, typically Java,
					so that members can be prepared to compete at a high level. We cover the basic data structures of a language,
					a few basic algorithms, and how to use the command line.</p>
				</div>
				<div className='my-10'>
					<h2 className='py-4 text-2xl lg:text-4xl text-black-500'>
						Ethical Hacking Club
					</h2>
					<p className="xl:w-8/12">EHC is a cybersecurity student organization whose primary objective is to garner interest in cybersecurity
						within Auburn University’s student body. Our members are composed of freshmen to graduate students,
						each with an interest in different parts of the cybersecurity field.
						<br/><br/>EHC is focused on developing a new wave of cybersecurity professionals.
						Over the past 5 years, we have taught Auburn University students cybersecurity principles through
						our participation in international security competitions, lectures on security topics, and practice with
						industry-standard security tools. We have worked with national laboratories to hold cybersecurity events,
						contributed to educating the general population about computer hygiene through good works,
						and developed and hosted a public cybersecurity event with over 2000 participants from all around the globe.
						For more info, follow this
						<a className="text-blue-500" href="https://ehc.auburn.edu/" target="_blank" rel="noopener noreferrer"> link</a>.
					</p>
				</div>
				<div className='my-10'>
					<h2 className='py-4 text-2xl lg:text-4xl text-black-500'>
						Artificial Intelligence Club
					</h2>
					<p className="xl:w-8/12">AI Club explores the exciting fields of deep learning, reinforcement learning,
					evolutionary computing, and artificial intelligence in general.
					We are a group of passionate people who are curious about how to make computers behave more like humans
					and tackle some of the most incredibly complex tasks on the planet. We have lots of fun together
					and push each other to do our best.
					<br/><br/>The club programs mainly in Python and PyTorch with minimal emphasis
					on other languages and frameworks. A basic understanding of calculus and statistics are recommended,
					but people of all backgrounds and experience levels are welcome!</p>
				</div>
			</main>
			<Footer />
		</div>
	);
}
