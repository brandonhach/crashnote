import Link from 'next/link';
import React from 'react';

type Props = {};

const NoteCard = (props: Props) => {
	const index = 1;
	return (
		<Link
			href={`note/${index}`}
			className='card bg-base-200/90 size-fit shadow-xl rounded-xl hover:cursor-pointer hover:bg-base-200/10 duration-500'>
			<figure>
				<img src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' alt='Shoes' />
			</figure>
			<div className='card-body'>
				<div className='relative card-title'>
					<h1>React Crash Course</h1>
					<div className='absolute avatar right-0'>
						<div className='mask mask-squircle w-10'>
							<img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' />
						</div>
					</div>
				</div>
				<p>For those who wants start building projects right away</p>
				<div className='card-actions justify-end'>
					<div className='badge badge-secondary'>React.js</div>
					<div className='badge badge-secondary'>TypeScript</div>
					<div className='badge badge-secondary'>TypeScript</div>
				</div>
			</div>
		</Link>
	);
};

export default NoteCard;
