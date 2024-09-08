import React from 'react';
import Link from 'next/link';
import { ChevronsUpDown, LayoutDashboard, LogOut, Pencil, Settings, Star } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
type Props = {};

const Navbar = (props: Props) => {
	return (
		<div className='drawer z-50'>
			<input id='my-drawer' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content'>
				{/* Page content here */}
				<label
					htmlFor='my-drawer'
					className='btn bg-white text-black font-bold rounded-md hover:bg-white/80 duration-500'>
					<LayoutDashboard />
				</label>
			</div>
			<div className=' drawer-side'>
				<label htmlFor='my-drawer' aria-label='close sidebar' className='drawer-overlay'></label>
				<ul className='relative menu bg-base-200 text-base-content min-h-full w-80 p-4'>
					{/* Sidebar content here */}
					<li className='flex items-center justify-center'>
						<Link href={'/'} className='font-extrabold text-4xl'>
							CrashNote.
						</Link>
					</li>
					<div className='divider'></div>
					{false ? (
						<>
							<div className='flex flex-col gap-4'>
								<li>
									<Link
										href={`/`}
										className={`rounded-md bg-white hover:bg-white/80 text-black text-lg flex flex-row items-center justify-center duration-500`}>
										<FcGoogle />
										Continue with Google
									</Link>
								</li>
								<li>
									<Link
										href={`/`}
										className={`rounded-md bg-[#24292e] hover:bg-[#24292e]/60 text-lg flex flex-row items-center justify-center duration-500`}>
										<FaGithub />
										Continue with Github
									</Link>
								</li>
							</div>
						</>
					) : (
						<>
							{/* User Info */}
							<div className='dropdown dropdown-right'>
								<li tabIndex={0} role='button'>
									<div className='flex w-full flex-col items-start gap-4'>
										<div className='flex items-center gap-4'>
											<div className='avatar'>
												<div className='mask mask-squircle w-12'>
													<img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
												</div>
											</div>
											<div className='flex flex-col gap-1'>
												<div className='h-4 w-fit'>Brandon Hach</div>
												<div className='h-4 w-fit text-neutral-500'>brandon@gmail.com</div>
											</div>
											<div className='place-items-end'>
												<ChevronsUpDown className='text-neutral-500' />
											</div>
										</div>
									</div>
								</li>{' '}
								<ul
									tabIndex={0}
									className='dropdown-content menu bg-base-200 rounded-xl z-[1] w-1/2 border-[1px] border-base-100'>
									<li>
										<Link href={'/'}>
											<LogOut></LogOut>
											<p className=''>Sign Out</p>
										</Link>
									</li>
									<li>
										<Link href={'/'}>
											<Settings></Settings>
											<p className=''>Settings</p>
										</Link>
									</li>
								</ul>
							</div>
							<div className='divider'></div>
							<li>
								<Link href={`/create`} className={`text-xl flex flex-row`}>
									<Pencil />
									<div className='divider'></div>Create
								</Link>
							</li>
							<li>
								<Link href={`/favorites`} className={`text-xl flex flex-row`}>
									<Star />
									<div className='divider'></div>Favorites
								</Link>
							</li>
						</>
					)}

					{/* Footer */}
					<div className='absolute bottom-6 flex flex-col items-start justify-start text-xs text-neutral-700 w-full'>
						<p>Built with Next.js, Springboot, Tailwind</p>
						<p>Built by Brandon Hach</p>
					</div>
				</ul>{' '}
			</div>
		</div>
	);
};

export default Navbar;
