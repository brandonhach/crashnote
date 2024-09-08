'use client';
import { Block } from '@blocknote/core';
import '@blocknote/core/fonts/inter.css';
import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import '@blocknote/mantine/style.css';
import { useState } from 'react';

export default function Document() {
	// Stores the document JSON.
	const [blocks, setBlocks] = useState<Block[]>([]);

	// Creates a new editor instance.
	const editor = useCreateBlockNote({
		initialContent: [
			{
				type: 'paragraph',
				content: 'Welcome to this demo!',
			},
			{
				type: 'heading',
				content: 'This is a heading block',
			},
			{
				type: 'paragraph',
				content: 'This is a paragraph block',
			},
			{
				type: 'paragraph',
			},
		],
	});

	// Renders the editor instance and its document JSON.
	return (
		<BlockNoteView
			editor={editor}
			editable={false}
			onChange={() => {
				// Saves the document JSON to state.
				setBlocks(editor.document);
			}}
		/>
	);
}
