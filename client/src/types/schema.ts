import { z } from 'zod';

const MAX_UPLOAD_SIZE = 1024 * 1024 * 5; // 5MB
const ACCEPTED_FILE_TYPES = ['image/png', 'image/jpg', 'image/gif'];

// const fileImageSchema = z
// 	.any()
// 	.refine((files) => files?.length == 1, 'Image is required.')
// 	.refine((files) => files?.[0]?.size <= MAX_UPLOAD_SIZE, `Max file size is 5MB.`)
// 	.refine(
// 		(files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
// 		'.jpg, .jpeg, .png and .webp files are accepted.'
// 	);

const jsonBlockSchema = z.string().min(1, 'Must have notes written.');

export const crashNoteSchema = z.object({
	title: z.string().min(1, 'Title is required.'),
	description: z.string().min(1, 'Description is required.'),
	tags: z.string().min(1, 'Tags are required.'),
	file: z.any(),
	editorContent: jsonBlockSchema,
});

export type CrashNote = z.infer<typeof crashNoteSchema>;
