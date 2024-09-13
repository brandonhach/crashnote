'use client';
import React, { useEffect, useState } from 'react';
import NoteCard from './NoteCard';
import { useInView } from 'react-intersection-observer';
import { getPaginationNote } from '@/app/page';

interface Note {
	id: string;
	title: string;
	description: string;
	tags: string;
}

interface PaginationData {
	content: Note[];
}

const NotePagination = ({ data, search }: { data: any; search: string }) => {
	const { content } = data;
	const [notes, setNotes] = useState(content);
	const [page, setPage] = useState(1);
	const [ref, inView] = useInView();
	async function loadMoreNotes() {
		const next = page + 1;
		const movies = await getPaginationNote(search, page);
		if (movies?.length) {
			setPage(next);
			setNotes((prev: Document[] | undefined) => [...(prev?.length ? prev : []), ...movies]);
		}
	}
	useEffect(() => {
		if (inView) {
			loadMoreNotes();
		}
	}, [inView]);

	return (
		<>
			{notes?.map((note: Note) => (
				<NoteCard key={note.id} note={note} />
			))}
			<div ref={ref}></div>
		</>
	);
};

export default NotePagination;
