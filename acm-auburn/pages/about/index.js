import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
export default function About() {
	return (
		<div>
			<NavBar />
			<main className='items-center px-6 lg:px-32 text-black'>
				<section className='my-20 xl:w-8/12'>
					<h1 className='text-3xl lg:text-5xl font-extrabold text-black-500'>
						<a className='auburn_blue'>About</a>
						<br />
						<a className='auburn_orange'>Us</a>
					</h1>
					<p className='font-bold mb-1 '>Auburn University Student Chapter</p>

				</section>
				<div className='my-10'>
					<div className="">
						<h2 className='py-4 text-2xl lg:text-4xl text-black-500'>
							Mission
						</h2>
						<p className='max-w-lg'>
							ACM is a professional society for Computer Scientists, Software Engineers, and general Tech Enthusiasts.
							We strive to offer an expansive, collaborative, and inclusive community to further develop our technical skills
							and to create meaningful relationships with our fellow students.
						</p>
					</div>
				</div>

				<div className='my-10'>
					<div className='py-4 text-2xl lg:text-4xl text-black-500'>
						<h2>Officers and Faculty Sponsor</h2>
					</div>
					<div className='people'>
						<div className='person'>
							<center>
								<img
									src='https://placekitten.com/1000/1009'
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
									src='https://placekitten.com/1006/1002'
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
						<div className='person'>
							<center>
								<img
									src='https://placekitten.com/1050/1007'
									alt='Ziyang Li'
								/>
							</center>
							<h5 className='text-xl text-bold'>Ziyang Li</h5>
							<p>Tech Lead</p>
						</div>
						<div className='person'>
							<center>
								<img
									src='https://placekitten.com/1040/1009'
									alt='Clint Lovelace'
								/>
							</center>
							<h5 className='text-xl text-bold'>Clint Lovelace</h5>
							<p>Faculty Sponsor</p>
						</div>
					</div>
				</div>

				<div className='my-10'>
					<div className='py-4 text-2xl lg:text-4xl text-black-500'>
						<h2>Clubs and Events</h2>
					</div>
					<div className='people'>
						<div className='person'>
							<center>
								<img
									src='https://placekitten.com/1009/1009'
									alt='CPT'
								/>
							</center>
							<p className="text-sm">Competitive Programming Team</p>
						</div>
						<div className='person'>
							<center>
								<img
									src='https://placekitten.com/1037/1013'
									alt='EHC'
								/>
							</center>
							<p className="text-sm">Ethical Hacking Club</p>
						</div>

						<div className='person'>
							<center>
								<img
									src='https://placekitten.com/1006/1007'
									alt='AI'
								/>
							</center>

							<p className="text-sm">Artificial Intelligence Club</p>
						</div>

						<div className='person'>
							<center>
								<img
									src='https://placekitten.com/1000/1007'
									alt='Auburn Hacks'
								/>
							</center>

							<p className="text-sm">Auburn Hackathon</p>
						</div>
						<div className='person'>
							<center>
								<img
									src='https://placekitten.com/1025/1029'
									alt='Tech Talks'
								/>
							</center>

							<p className="text-sm">Tech Talks</p>
						</div>
						<div className='person'>
							<center>
								<img
									src='https://placekitten.com/1003/1003'
									alt='Tea Time'
								/>
							</center>
							<p className="text-sm">Tea Time</p>
						</div>
					</div>
				</div>

			</main>
			<Footer />
		</div>
	);
}
