import Link from "next/link";
export default function NavBar() {
	return (
		<nav className='flex justify-between items-center py-4 px-6'>
			<Link href='/'>
				<a className='py-2 px-1 mx-1 sm:px-4 sm:mx-3 rounded-2xl shadow hover:bg-white transition ease-in duration-200'>
					<p className='text-2xl font-bold'><span style={{color: "#03244d"}}>ACM</span> <span style={{color: "#dd550c"}} >AUBURN</span></p>
				</a>
			</Link>
			<div className='flex'>
				<Link href='/about'>
					<a className='rounded-2xl shadow hover:bg-white py-2 px-1 mx-1 sm:px-4 sm:mx-3 transition ease-in duration-200'>
						About
					</a>
				</Link>
				<Link href='/calendar'>
					<a className='rounded-2xl shadow hover:bg-white py-2 px-1 mx-1 sm:px-4 sm:mx-3 transition ease-in duration-200'>
						Calendar
					</a>
				</Link>
				<Link href='/clubs'>
					<a className='rounded-2xl shadow hover:bg-white py-2 px-1 mx-1 sm:px-4 sm:mx-3 transition ease-in duration-200'>
						Clubs
					</a>
				</Link>
				<Link href='/events'>
					<a className='rounded-2xl shadow hover:bg-white py-2 px-1 mx-1 sm:px-4 sm:mx-3 transition ease-in duration-200'>
						Events
					</a>
				</Link>
				<Link href='/resources'>
					<a className='rounded-2xl shadow hover:bg-white py-2 px-1 mx-1 sm:px-4 sm:mx-3b transition ease-in duration-200'>
						Resources
					</a>
				</Link>
			</div>
		</nav>
	);
}
