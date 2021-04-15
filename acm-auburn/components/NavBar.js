import Link from "next/link";

export default function NavBar() {

	return (
		<nav className='flex justify-between flex-col md:flex-row items-center header py-4 px-6'>
			<div className="flex my-2" >
			<Link href='/'>
				<a className='rounded-xl shadow hover:bg-white py-2 px-2 mx-2 transition ease-in duration-200'>
					<p className='text-2xl font-bold'><span style={{color: "#03244d"}}>ACM</span> <span style={{color: "#dd550c"}} >AUBURN</span></p>
				</a>
			</Link>
			</div>
			<div className='flex text-xs md:text-base'>
				<Link href='/about'>
					<a className='rounded-xl shadow hover:bg-white py-2 px-1 mx-1 md:px-2 md:mx-2 transition ease-in duration-200'>
						About
					</a>
				</Link>
				<Link href='https://calendar.google.com/calendar/u/0/r?cid=YWNtYXVidXJuQGdtYWlsLmNvbQ'>
					<a className='rounded-xl shadow hover:bg-white py-2 px-1 mx-1 md:px-2 md:mx-2 transition ease-in duration-200' target="_blank" rel="noreferrer">
						Calendar
					</a>
				</Link>
				<Link href='/clubs'>
					<a className='rounded-2xl shadow hover:bg-white py-2 px-1 mx-1 md:px-2 md:mx-2 transition ease-in duration-200'>
						Clubs
					</a>
				</Link>
				<Link href='/events'>
					<a className='rounded-2xl shadow hover:bg-white py-2 px-1 mx-1 md:px-2 md:mx-2 transition ease-in duration-200'>
						Events
					</a>
				</Link>
				<Link href='/resources'>
					<a className='rounded-2xl shadow hover:bg-white py-2 px-1 mx-1 md:px-2 md:mx-2 transition ease-in duration-200'>
						Resources
					</a>
				</Link>
			</div>
		</nav>
	);
}
