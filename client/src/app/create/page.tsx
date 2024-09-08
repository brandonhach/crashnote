import CreateNoteForm from '@/components/CreateNoteForm';
import { Toaster } from 'react-hot-toast';

const CreateNote = () => {
	return (
		<div className='p-4 size-full flex flex-col overflow-x-hidden justify-end items-end'>
			<Toaster position='bottom-right' reverseOrder={false} />

			<div className='w-5/6 flex-grow bg-base-200/50 rounded-xl'>
				<CreateNoteForm></CreateNoteForm>
			</div>
		</div>
	);
};

export default CreateNote;
