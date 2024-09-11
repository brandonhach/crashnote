import React from 'react';
import dynamic from 'next/dynamic';
import NoteProfileCard from '@/components/NoteProfileCard';
import { apiBaseUrl } from '@/config/api';
import { redirect } from 'next/navigation';

type Props = {};

export async function getNoteData(id: string) {
	const response = await fetch(`${apiBaseUrl}/api/crashnote/note/${id}`, {
		method: 'GET',
	});
	if (!response.ok) {
		redirect('/');
	}
	const data = await response.json();
	return data;
}

const Note = async ({ params }: { params: { id: string } }) => {
	const { data } = await getNoteData(params.id);
	console.log(data);
	const Document = dynamic(() => import('@/components/Document'), { ssr: false });
	return (
		<div className='p-4 size-full flex flex-row overflow-x-hidden'>
			{/* Content  */}
			<div className='w-1/6 h-full flex flex-col items-center justify-center'>
				<NoteProfileCard></NoteProfileCard>
			</div>
			<div className='w-5/6 flex-grow rounded-xl bg-[#1f1f1f]'>
				<Document data={data}></Document>
			</div>
		</div>
	);
};

export default Note;
