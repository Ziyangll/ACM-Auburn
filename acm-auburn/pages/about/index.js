import Head from "next/head";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Link from 'next/link'
export default function About() {
	return (
		<div>
			<Head>
				<title>About ACM Auburn</title>
				<meta
					name='description'
					content='ACM Auburn University student chapter official website about page'
				/>
				<meta name='keywords' content='ACM Auburn about' />
				<meta name='author' content='Ziyang Li' />
				<link rel='icon' href='/acm.svg' />
			</Head>
			<NavBar />
			<main className='items-center px-6 lg:px-32 min-h-screen text-black'>
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
									src='/JoshCoward.png'
									alt='Josh Coward'
								/>
							</center>
							<br />
							<h5 className='text-xl text-bold'>Josh Coward</h5>
							<p>President</p>
						</div>
						<div className='person'>
							<center>
								<img
									src='/ZiyangLi.png'
									alt='Ziyang Li'
								/>
							</center>
							<br />
							<h5 className='text-xl text-bold'>Ziyang Li</h5>
							<p>Vice President</p>
						</div>
						<div className='person'>
							<center>
								<img
									src='/DavidJoy.png'
									alt='David Joy'
								/>
							</center>
							<br />
							<h5 className='text-xl text-bold'>David Joy</h5>
							<p>Secretary</p>
						</div>
						<div className='person'>
							<center>
								<img
									src='/EileenLanda.png'
									alt='Eileen Landa'
								/>
							</center>
							<br />
							<h5 className='text-xl text-bold'>Eileen Landa</h5>
							<p>Treasurer</p>
						</div>
						<div className='person'>
							<center>
								<img
									src='/ZiyangLi.png'
									alt='Ziyang Li'
								/>
							</center>
							<br />
							<h5 className='text-xl text-bold'>Ziyang Li</h5>
							<p>Tech Lead</p>
						</div>
						<div className='person'>
							<center>
								<img
									src='/JaredPrather.png'
									alt='Jared Prather'
								/>
							</center>
							<br />
							<h5 className='text-xl text-bold'>Jared Prather</h5>
							<p>Auburn Hacks Director</p>
						</div>
						<div className='person'>
							<center>
								<img

									src='ClintLovelace.jpg'
									alt='Clint Lovelace'
									style={{objectFit: "cover"}}
								/>
							</center>
							<br />
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
						<Link href='/clubs'>
							<div className='person cursor-pointer'>
								<center>

									<img
										src='/ICPC.svg'
										alt='CPT'
									/>

								</center>
								<br/>
								<h5 className='text-xl text-bold'>Competitive Programming Team</h5>
							</div>
						</Link>
						<Link href='/clubs'>
							<div className='person cursor-pointer'>
								<center>
									<img
										src='/EHC.svg'
										alt='EHC'
									/>
								</center>
								<br/>
								<h5 className='text-xl text-bold'>Ethical Hacking Club</h5>
							</div>
						</Link>
						<Link href='/clubs'>
							<div className='person cursor-pointer'>
								<center>
									<img
										src='/AI.svg'
										alt='AI'
									/>
								</center>
								<br/>
								<h5 className='text-xl text-bold'>Artificial Intelligence Club</h5>
							</div>
						</Link>
						<Link href='/events'>
							<div className='person cursor-pointer'>
								<center>
									<img
										src='/AuburnHacksLogo.svg'
										alt='Auburn Hacks'
									/>
								</center>
								<br/>
								<h5 className='text-xl text-bold'>Auburn Hackathon</h5>
							</div>
						</Link>
						<Link href='/events'>
							<div className='person cursor-pointer'>
								<center>
									<img
										src='/TechTalk.svg'
										alt='Tech Talks'
									/>
								</center>
								<br/>
								<h5 className='text-xl text-bold m-1'>Tech Talks</h5>
							</div>
						</Link>
						<Link href='/events'>
							<div className='person cursor-pointer'>
								<center>
									<img
										src='/TeaTime.svg'
										alt='Tea Time'
									/>
								</center>
								<br/>
								<h5 className='text-xl text-bold m-1'>Tea Time</h5>
							</div>
						</Link>
					</div>
				</div>

			</main>
			<Footer />
		</div>
	);
}
