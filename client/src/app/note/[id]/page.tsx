import React from 'react';
import Image from 'next/image';

type Props = {};

const Note = (props: Props) => {
	return (
		<div className='p-4 size-full flex flex-col overflow-x-hidden'>
			{/* Content  */}
			<div className='w-full flex-grow bg-base-200/50 rounded-xl'></div>
		</div>
	);
};

export default Note;
