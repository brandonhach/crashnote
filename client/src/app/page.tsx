import NotePagination from '@/components/NotePagination';
import { apiGET } from '@/config/api';
import { redirect } from 'next/navigation';

export async function getPaginationNote(query: string, pageNum: number) {
	const response = await fetch(`${apiGET}/api/crashnote/search/note?query=${query}&page=${pageNum}`, {
		method: 'GET',
		credentials: 'include',
	});
	if (!response.ok) {
		redirect('/');
	}
	const data = await response.json();
	return data;
}

export default async function Home() {
	const data = await getPaginationNote('', 0);
	const initialSearch = '';
	return (
		<div className='size-full flex flex-col items-end'>
			{/* Search */}
			<div className='w-5/6 h-28 flex flex-row items-center justify-between md:pb-4 pb-8 gap-4'>
				<h1 className='text-4xl font-extrabold'>Lookup and Learn Quick.</h1>
				<form action='' className='flex flex-row w-2/3 justify-end items-center gap-4 px-2'>
					<input
						type='text'
						placeholder='Search notes by title, keywords...'
						className={`input input-bordered w-full md:max-w-lg max-w-[16rem] rounded-xl  bg-base-200`}
					/>
					<button type='submit' className='btn btn-success rounded-xl btn-sm'>
						Go
					</button>
				</form>
			</div>
			{/* Infinite Scroll Content */}{' '}
			<div className='w-5/6 flex-grow grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 auto-rows-auto overflow-y-scroll overflow-x-hidden gap-0 md:gap-4 place-items-baseline place-content-start pr-10'>
				<NotePagination search={initialSearch} data={data}></NotePagination>
			</div>
		</div>
	);
}
