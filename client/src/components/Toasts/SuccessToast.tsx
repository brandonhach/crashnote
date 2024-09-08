import { CircleCheck } from 'lucide-react';
import toast from 'react-hot-toast';

export function SuccessToast(msg: string) {
	toast(msg, {
		icon: <CircleCheck className='text-xl text-success' />,
		style: {
			borderRadius: '10px',
			background: '#171717',
			color: '#fff',
		},
	});
}
