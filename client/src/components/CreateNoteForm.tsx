'use client';
import { CrashNote, crashNoteSchema } from '@/types/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { ErrToast } from './Toasts/ErrToast';
import { Block } from '@blocknote/core';
import Editor, { loadFromStorage } from './Editor';
import { SuccessToast } from './Toasts/SuccessToast';

type Props = {};

const CreateNoteForm = (props: Props) => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
		setValue,
		trigger,
	} = useForm<CrashNote>({ mode: 'onChange', resolver: zodResolver(crashNoteSchema) });

	const { isValid } = useFormState({ control });

	const processForm = async (data: CrashNote) => {
		const formData = new FormData();
		formData.append('title', data.title);
		formData.append('description', data.description);
		formData.append('tags', data.tags);
		formData.append('editorContent', data.editorContent);
		formData.append('file', data.file);
		try {
			const res = await fetch('/api/addCrashNote', {
				method: 'POST',
				body: formData,
			});

			if (!res.ok) {
				ErrToast('Unexpected server error occured. Please try again later.');
				throw new Error('Network response was not ok');
			}
			const result = await res.json();
			SuccessToast('Your notes have been published and saved.');
			localStorage.removeItem('editorContent');
			console.log(result);
		} catch (error) {
			console.error('Unexpected Error when attempting to create crashnote:', error);
		}
	};
	const onInvalid = (errors: any) => console.error(errors);

	useEffect(() => {
		if (errors.title) {
			ErrToast(String(errors.title.message));
		}
		if (errors.tags) {
			ErrToast(String(errors.tags.message));
		}
		if (errors.file) {
			ErrToast(String(errors.file.message));
		}
		if (errors.editorContent) {
			ErrToast(String(errors.editorContent.message));
		}
	}, [errors]);

	const [editorContent, setEditorContent] = useState<string>('');
	const handleEditorChange = (blocks: Block[]) => {
		const jsonString = JSON.stringify(blocks);
		setEditorContent(jsonString);
		setValue('editorContent', jsonString);
	};

	if (editorContent === '') {
		setEditorContent(JSON.stringify(loadFromStorage()));
	}

	const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setValue('file', file);
		}
	};

	const [validationFailed, setValidationFailed] = useState(false);

	const validateAndProceed = async () => {
		// Trigger validation for all fields
		const result = trigger();

		if (await result) {
			// If validation passes, proceed to the next tab
			setValidationFailed(false);
		} else {
			// If validation fails, update state to disable the button
			setValidationFailed(true);
		}
	};

	useEffect(() => {
		if (isValid) {
			setValidationFailed(false);
		}
	}, [isValid]);

	return (
		<form onSubmit={handleSubmit(processForm, onInvalid)} className='flex flex-col size-full'>
			<div className='w-full h-14 flex flex-row justify-start gap-2 items-center'>
				{' '}
				<input
					{...register('title')}
					placeholder='Title here...'
					className='input input-bordered w-1/4 rounded-md font-extrabold'
				/>
				<input
					{...register('description')}
					placeholder='Description here...'
					className='input input-bordered w-2/4 rounded-md font-extrabold'
				/>
				<input
					{...register('tags')}
					placeholder='Tag i.e. python,flask,pip'
					className='input input-bordered w-1/4 rounded-md font-extrabold'
				/>
				<input
					type='file'
					onChange={onFileChange}
					className='file-input file-input-bordered w-full max-w-xs rounded-md font-extrabold'
				/>
				<button
					onClick={validateAndProceed}
					disabled={validationFailed}
					type='submit'
					className='btn btn-sm rounded-md bg-success hover:bg-success/80 duration-500 min-w-20'>
					{isSubmitting ? (
						<>
							<span className='loading loading-spinner loading-sm'></span>
						</>
					) : (
						<p>Publish</p>
					)}
				</button>
			</div>
			<div className='flex-grow w-full'>
				<Editor onChange={handleEditorChange} />
			</div>
			<input type='hidden' {...register('editorContent')} value={editorContent} />
		</form>
	);
};

export default CreateNoteForm;
