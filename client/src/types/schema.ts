import { z } from 'zod';

const MAX_UPLOAD_SIZE = 1024 * 1024 * 5; // 3MB
const ACCEPTED_FILE_TYPES = ['image/png', 'image/jpg', 'image/gif'];

const fileImageSchema = z
	.instanceof(File)
	.refine((file) => file.size <= MAX_UPLOAD_SIZE, `Image size must be less than 5 MB.`)
	.refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), `.jpg .png .gif are only allowed.`);

const jsonBlockSchema = z.string().min(1, 'Must have notes written.');

export const crashNoteSchema = z.object({
	title: z.string().min(1, 'Title is required.'),
	tags: z.string().min(1, 'Tags are required.'),
	file: fileImageSchema,
	editorContent: jsonBlockSchema,
});

export type CrashNote = z.infer<typeof crashNoteSchema>;
