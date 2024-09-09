import React from 'react';
import Image from 'next/image';

type Props = {};

const Favorites = (props: Props) => {
	return (
		<div className='size-full flex flex-row items-center justify-center'>
			<div className='relative border-1 border-white size-96'>
				<Image src={'/img/construction.png'} alt='bear' fill></Image>
			</div>
		</div>
	);
};

export default Favorites;
