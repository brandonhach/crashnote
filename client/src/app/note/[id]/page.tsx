import React from 'react';
import dynamic from 'next/dynamic';
import NoteProfileCard from '@/components/NoteProfileCard';

type Props = {};

const Note = (props: Props) => {
	const Document = dynamic(() => import('@/components/Document'), { ssr: false });
	return (
		<div className='p-4 size-full flex flex-row overflow-x-hidden'>
			{/* Content  */}
			<div className='w-1/6 h-full flex flex-col items-center justify-start pt-10'>
				<NoteProfileCard></NoteProfileCard>
			</div>
			<div className='w-full flex-grow bg-base-200/50 rounded-xl'>
				<Document></Document>
			</div>
		</div>
	);
};

export default Note;
