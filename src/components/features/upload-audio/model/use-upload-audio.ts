'use client';

import { CreateTranscriptionJobDocument } from '@/graphql/gql/graphql';
import { useMutation } from '@apollo/client/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function useUploadAudio() {
	const router = useRouter();
	const [isUploading, setIsUploading] = useState(false);
	const [createTranscriptionJob] = useMutation(
		CreateTranscriptionJobDocument,
	);

	const handleUpload = async ({ file, onError }: any) => {
		setIsUploading(true);
		try {
			await createTranscriptionJob({
				variables: { audio: file },
			});
			setIsUploading(false);
			router.refresh();
			window.scrollTo({ top: 0, behavior: 'smooth' })
		} catch (err) {
			setIsUploading(false);
			onError(err);
			console.error('Upload error:', err);
		}
	};

	return { handleUpload, isUploading };
}
