import { CircleX } from 'lucide-react';
import toast from 'react-hot-toast';

export function ErrToast(msg: string) {
	toast(msg, {
		icon: <CircleX className='text-xl text-error' />,
		style: {
			borderRadius: '10px',
			background: '#171717',
			color: '#fff',
		},
	});
}
