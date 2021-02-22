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
									src='https://placekitten.com/1000/1007'
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
									src='https://placekitten.com/1000/1007'
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

			</main>
			<Footer />
		</div>
	);
}
