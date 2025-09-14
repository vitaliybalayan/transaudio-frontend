'use client';

import { CreateTranscriptionJobDocument } from '@/graphql/gql/graphql';
import { useMutation } from '@apollo/client/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function useUploadAudio() {
	const router = useRouter();
	const [uploadPct, setUploadPct] = useState(0);
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
			setUploadPct(100);
			router.refresh();
		} catch (err) {
			setIsUploading(false);
			onError(err);
			console.error('Upload error:', err);
		}
	};

	return { handleUpload, isUploading, uploadPct };
}
