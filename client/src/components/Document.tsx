'use client';
import { Block } from '@blocknote/core';
import '@blocknote/core/fonts/inter.css';
import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import '@blocknote/mantine/style.css';
import { useState, useEffect } from 'react';

interface DocumentProps {
	data: {
		editorContent: string;
	};
}

export default function Document({ data }: DocumentProps) {
	// Stores the document JSON.
	const [blocks, setBlocks] = useState<Block[]>([]);

	// Parse editorContent
	const initialContent: Block[] = JSON.parse(data.editorContent);

	// Creates a new editor instance.
	const editor = useCreateBlockNote({
		initialContent: initialContent,
	});

	// Update blocks when editor changes
	useEffect(() => {
		setBlocks(editor.document);
	}, [editor]);

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
