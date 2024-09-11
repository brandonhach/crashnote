import React from 'react';

interface NoteProps {
	data: {
		title: string;
		description: string;
	};
}

const NoteProfileCard = ({ note }: any) => {
	return (
		<div className='card bg-base-100 w-full p-2 shadow-xl'>
			<figure className='px-10 pt-10'>
				<img
					src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
					alt='Shoes'
					className='rounded-xl'
				/>
			</figure>
			<div className='card-body items-center text-center'>
				<h2 className='card-title'>{note.title}</h2>
				<p>{note.description}</p>
			</div>
		</div>
	);
};

export default NoteProfileCard;
