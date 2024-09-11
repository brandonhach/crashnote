import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

type Props = {};

const NoteCard = ({ note }: any) => {
	return (
		<Link
			href={`note/${note.id}`}
			className='card bg-base-200/90 size-fit shadow-xl rounded-xl hover:cursor-pointer hover:bg-base-200/10 duration-500 w-full'>
			<figure className='relative w-full h-44'>
				<Image
					src={
						'https://images.unsplash.com/photo-1725656471389-b78f4703271f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D'
					}
					alt='note'
					objectFit='cover'
					fill></Image>
			</figure>
			<div className='card-body'>
				<div className='relative card-title'>
					<h1>{note.title}</h1>
					<div className='absolute avatar right-0'>
						<div className='mask mask-squircle w-10'>
							<Image
								src={
									'https://images.unsplash.com/photo-1636041263374-dff82464f619?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								}
								alt='note'
								objectFit='cover'
								fill></Image>
						</div>
					</div>
				</div>
				<p>{note.description}</p>
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
