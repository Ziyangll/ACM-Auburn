import Head from "next/head";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
export default function Clubs() {
	return (
		<div>
			<Head>
				<title>ACM Auburn Events</title>
				<meta
					name='description'
					content='ACM Auburn University student chapter official website event page'
				/>
				<meta name='keywords' content='ACM Auburn event'/>
				<meta name='author' content='Ziyang Li' />
				<link rel='icon' href='/acm.svg' />
			</Head>
			<NavBar />
			<main className='items-center px-6 lg:px-32 min-h-screen text-black'>
				<section className='my-20 xl:w-8/12'>
					<h1 className='text-3xl lg:text-5xl font-extrabold text-black-500'>
						<a className='auburn_blue'>Events</a>
					</h1>
					<p className='mb-1 '>
						ACM offers these events with the intention of expanding beyond the weekly meeting schedule.
						We hope to offer development, networking, and social opportunities for our members.
					</p>
				</section>
				<div className='my-10'>
					<h2 className='py-4 text-2xl lg:text-4xl text-black-500'>
						Auburn Hacks
					</h2>
					<p className="xl:w-8/12">We are Auburn University’s premier programming competition, designed by students, for students.
						We hope to spark technical innovation and highlight students’ skills and abilities.
						Partnering with Major League Hacking (MLH), we strive to bring out the best and brightest students,
						not just from Auburn University but from other universities all over the United States, Europe, and Canada.
						This 24-hour, full-steam-ahead event, will challenge
						participants to learn, think outside the box, and push the limits on what they can build using technology.
					</p>
				</div>
				<div className='my-10'>
					<h2 className='py-4 text-2xl lg:text-4xl text-black-500'>
						Tech Talks
					</h2>
					<p className="xl:w-8/12">Beyond hands on practice with different technologies, ACM strives to provide our members with plentiful opportunities
						to connect with recruiters and employees from high quality companies. Tech Talks are hosted by Auburn
						CSSE through ACM to allow for these interactions. Representatives from these companies come and present
						on topics such as their work, their technologies, their typical day-to-day life, and so on.
						Following the presentations, students are able to network with the representatives and build positive relationships
						leading to possible internships and jobs.
					</p>
				</div>
				<div className='my-10'>
					<h2 className='py-4 text-2xl lg:text-4xl text-black-500'>
						Tea Time
					</h2>
					<p className="xl:w-8/12">Sometimes it's nice to just sit down, relax, and eat a meal with friends.
						ACM hosts a weekly dinner specifically for this purpose.
						Once a week, ACM members of all clubs meet at a restaurant in Auburn and hang out.
						We want our members to have personal relationships outside of programming,
						so we always encourage all of our members to come to Tea Time.
					</p>
				</div>
			</main>
			<Footer />
		</div>
	);
}
