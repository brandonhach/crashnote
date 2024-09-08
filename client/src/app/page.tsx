import NoteCard from '@/components/NoteCard';
import Image from 'next/image';

export default function Home() {
	return (
		<div className='size-full flex flex-col items-end'>
			{/* Search */}
			<div className='w-5/6 h-28 flex flex-row items-center justify-center md:pb-4 pb-8'>
				<input
					type='text'
					placeholder='Search notes by keyword... '
					className={`input input-bordered w-full md:max-w-sm max-w-[16rem] rounded-xl  bg-base-200`}
				/>
			</div>
			{/* Infinite Scroll Content */}
			<div className='w-5/6 flex-grow grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 auto-rows-auto overflow-y-scroll overflow-x-hidden rounded-xl place-items-center place-content-start gap-0 md:gap-4'>
				<NoteCard></NoteCard>
				<NoteCard></NoteCard>
				<NoteCard></NoteCard>
				<NoteCard></NoteCard>
				<NoteCard></NoteCard>
				<NoteCard></NoteCard>
				<NoteCard></NoteCard>
				<NoteCard></NoteCard>
			</div>
		</div>
	);
}
