'use client';
import { Block, BlockNoteEditor, PartialBlock } from '@blocknote/core';
import '@blocknote/core/fonts/inter.css';
import { BlockNoteView } from '@blocknote/mantine';
import '@blocknote/mantine/style.css';
import { useEffect, useMemo, useState } from 'react';
import styles from '@/components/css/editor.module.css';

interface EditorProps {
	onChange: (blocks: Block[]) => void;
}

async function saveToStorage(jsonBlocks: Block[]) {
	localStorage.setItem('editorContent', JSON.stringify(jsonBlocks));
}

export function loadFromStorage() {
	const storageString = localStorage.getItem('editorContent');
	return storageString ? (JSON.parse(storageString) as PartialBlock[]) : undefined;
}

export default function Editor({ onChange }: EditorProps) {
	const [initialContent, setInitialContent] = useState<PartialBlock[] | undefined | 'loading'>('loading');

	useEffect(() => {
		setInitialContent(loadFromStorage());
	}, []);

	const editor = useMemo(() => {
		if (initialContent === 'loading') {
			return undefined;
		}
		return BlockNoteEditor.create({ initialContent });
	}, [initialContent]);

	if (editor === undefined) {
		return (
			<div className='size-full flex flex-col items-center justify-center'>
				<span className='loading loading-bars loading-lg'></span>
			</div>
		);
	}

	return (
		<BlockNoteView
			editor={editor}
			onChange={() => {
				onChange(editor.document);
				saveToStorage(editor.document);
			}}
		/>
	);
}
