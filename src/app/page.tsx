import { Col, Row } from 'antd';
import { MyJobs } from '../components/features/my-jobs';
import { UploadAudio } from '../components/features/upload-audio';
import { notFound } from 'next/navigation';
import { SERVER_URL } from '@/libs/constants/url.constants';
import { Metadata } from 'next';

const fetchJobs = async () => {
	try {
		const response = await fetch(SERVER_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			// todo: Переделать на import
			body: JSON.stringify({
				query: `query getJobs {getJobs {
				id
				filename
				status
				updatedAt
				transcriptionText
			}}`,
			}),
		});

		const { data } = await response.json();

		return {
			getJobs: data.getJobs,
		};
	} catch (error) {
		return notFound();
	}
};

export const metadata: Metadata = {
	title: 'Сервис транскрибации аудио',
	description: 'Загрузите аудиофайл — получите транскрибацию'
}

export default async function Home() {
	const { getJobs } = await fetchJobs();

	return (
		<div className="container">
			<Row gutter={[24, 24]}>
				<Col xs={24} lg={10}>
					<UploadAudio />
				</Col>

				<Col xs={24} lg={14}>
					<MyJobs jobs={getJobs} />
				</Col>
			</Row>
		</div>
	);
}
