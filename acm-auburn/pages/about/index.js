import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
export default function About() {
	return (
		<div>
			<NavBar />
			<main className='items-center px-6 lg:px-32 text-black'>
				<section className='my-20 w-screen md:w-9/12 xl:w-8/12'>
					<span className='font-bold uppercase tracking-widest'></span>
					<h1 className='text-3xl lg:text-5xl font-extrabold text-black-500'>
						<a className='auburn_blue'>About</a>
						<br />
						<a className='auburn_orange'>Us</a>
					</h1>
					<p className='font-bold mb-1 '>Auburn University Student Chapter</p>
					<p className='max-w-md'>
						ACM Student Chapter is the international Association for Computing
						Machinery's student society which provides opportunities to students
						for networking, learn together and share their knowledge. Its main
						focus is on building and developing members' passion for computer
						science.
					</p>
				</section>

				<div className=''>
					<div className='py-4 text-2xl lg:text-4xl text-black-500'>
						<h2>Officers and Faculty Sponsor</h2>
					</div>
					<div className='people'>
						<div className='person'>
							<center>
								<img
									src='https://placekitten.com/1000/1000'
									alt='Connor Johnston'
								/>
							</center>
							<h5 className='text-xl text-bold'>Connor Johnston</h5>
							<p>President</p>
						</div>
						<div className='person'>
							<center>
								<img
									src='https://placekitten.com/1000/1001'
									alt='Hudson Chromy'
								/>
							</center>
							<h5 className='text-xl text-bold'>Hudson Chromy</h5>
							<p>Vice President</p>
						</div>
						<div className='person'>
							<center>
								<img
									src='https://placekitten.com/1001/1002'
									alt='Josh Coward'
								/>
							</center>
							<h5 className='text-xl text-bold'>Josh Coward</h5>
							<p>Secretary</p>
						</div>
						<div className='person'>
							<center>
								<img
									src='https://placekitten.com/1000/1003'
									alt='Carson Barnett'
								/>
							</center>
							<h5 className='text-xl text-bold'>Carson Barnett</h5>
							<p>Treasurer</p>
						</div>
					</div>
				</div>

				<div className='my-10'>
					<div>
						<h2 className='py-4 text-2xl lg:text-4xl text-black-500'>
							Clubs/Activities
						</h2>
						<table>
							<tr>
								<td>Competitive Programming Team </td>
								<td>- The Competitive Programming Team</td>
							</tr>
							<tr>
								<td>FCPT </td>
								<td>- Beginner friendly competitive programming </td>
							</tr>
							<tr>
								<td>EHC </td>
								<td>- Ethical Hacking Club </td>
							</tr>
							<tr>
								<td>AI </td>
								<td>- Artificial Intelligence Club </td>
							</tr>
							<tr>
								<td>Talks </td>
								<td>- Tech talks from tech companies </td>
							</tr>
							<tr>
								<td>Mock Interviews </td>
								<td>- Monthly mock inteviews </td>
							</tr>
							<tr>
								<td>Hackathon </td>
								<td>- yearly Auburn Hackathon </td>
							</tr>
							<tr>
								<td>Tea Time </td>
								<td>- Weekly social meetings </td>
							</tr>
						</table>
					</div>
				</div>
				<div className='my-10'>
					<div>
						<h2 className='py-4 text-2xl lg:text-4xl text-black-500'>
							Mission
						</h2>
						<p className='max-w-md'>
							ACM is a professional society for Computer Scientists, Software Engineers, and general Tech Enthusiasts.
							We strive to offer an expansive, collaborative, and inclusive community to further develop our technical skills
							and to create meaningful relationships with our fellow students.
						</p>
					</div>
				</div>

				<div className='my-10'>
					<div>
						<h2 className='py-4 text-2xl lg:text-4xl text-black-500'>
							Join Today!
						</h2>
						<p className='max-w-md'>Click the discord icon in the footer</p>
						<p className='max-w-md'>
							Join for many academic, social, and leadership opportunities
						</p>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
