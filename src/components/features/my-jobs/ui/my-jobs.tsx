'use client';

import { useEffect, useState } from 'react';
import {
	Avatar,
	Button,
	Card,
	Empty,
	List,
	Modal,
	Space,
	Tooltip,
	Typography,
} from 'antd';
import {
	CloseCircleTwoTone,
	PlayCircleOutlined,
	AudioOutlined,
	LoadingOutlined,
	CloudDownloadOutlined,
} from '@ant-design/icons';
import { statusIcon, statusTag } from '@/components/status-tag';
import classes from './my-jobs.module.scss';
import { useRouter } from 'next/navigation';
import { JobModel } from '@/graphql/gql/graphql';

interface Props {
	jobs: JobModel[]
}

const { Text, Paragraph } = Typography;

export const MyJobs = ({ jobs = [] }: Props) => {
	const router = useRouter();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedJob, setSelectedJob] = useState<JobModel | null>(null);

	const openTranscript = (job: JobModel) => {
		if (job.status !== 'SUCCESS') return;
		setSelectedJob(job);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedJob(null);
	};

	useEffect(() => {
		const fetchData = async () => {
			router.refresh();
		};

		fetchData();
		const interval = setInterval(fetchData, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<Card className="card-shadow" title="Мои задачи">
				{jobs.length < 1 ? (
					<Empty description="Пока задач нет — загрузите аудио" />
				) : (
					<List
						itemLayout="vertical"
						dataSource={jobs}
						rowKey={j => j.id}
						split
						renderItem={job => (
							<List.Item
								extra={
									<Space direction="vertical" align="end" size={8}>
										{statusTag(job.status)}
										<Space>
											<Tooltip title="Открыть транскрипт">
												<Button
													type="primary"
													icon={<PlayCircleOutlined />}
													onClick={() => openTranscript(job)}
													disabled={job.status !== 'SUCCESS'}
												>
													Открыть
												</Button>
											</Tooltip>

											<Tooltip title="Скачать аудиофайл по Presigned URL">
												<Button
													type={'link'}
													href={job.presignedUrl || ''}
													icon={<CloudDownloadOutlined />}
													target={'_blank'}
													disabled={job.status !== 'SUCCESS'}
												>
													Скачать
												</Button>
											</Tooltip>
										</Space>
									</Space>
								}
							>
								<List.Item.Meta
									avatar={
										<Avatar
											shape="square"
											size={44}
											style={{ background: '#f0f5ff', color: '#2f54eb' }}
											icon={<AudioOutlined />}
										/>
									}
									title={
										<Text
											strong
											ellipsis={{ tooltip: job.filename }}
											style={{ display: 'inline-block', maxWidth: 520 }}
										>
											{job.filename}
										</Text>
									}
									description={
										<Space
											direction="vertical"
											size={6}
											style={{ width: '100%' }}
										>
											<Space align="center">
												{statusIcon(job.status)}
												<Text type="secondary">
													Обновлено:{' '}
													{new Date(job.updatedAt).toLocaleString()}
												</Text>
											</Space>

											{job.status === 'ERROR' && (
												<Space className={classes.errorContainer}>
													<CloseCircleTwoTone twoToneColor="#ff4d4f" />
													<Text type="danger">Ошибка обработки</Text>
												</Space>
											)}

											{job.status === 'CREATED' && (
												<Space>
													<LoadingOutlined />
													<Text type="secondary">Файл в обработке…</Text>
												</Space>
											)}
										</Space>
									}
								/>
							</List.Item>
						)}
					/>
				)}
			</Card>

			<Modal
				open={isModalOpen}
				onCancel={closeModal}
				footer={null}
				centered
				width={800}
				destroyOnClose
				maskClosable
				title={
					<Space direction="vertical" size={0} style={{ width: '100%' }}>
						<Text strong style={{ fontSize: 16 }}>
							Транскрипт — {selectedJob?.filename ?? ''}
						</Text>
						<Text type="secondary" style={{ fontSize: 12 }}>
							Обновлено:{' '}
							{selectedJob ? new Date(selectedJob.updatedAt).toLocaleString() : ''}
						</Text>
					</Space>
				}
				styles={{ body: { paddingTop: 8 } }}
			>
				{selectedJob?.transcriptionText ? (
					<Paragraph
						copyable={{ text: selectedJob.transcriptionText }}
						className={classes.transcriptionText}
					>
						{selectedJob.transcriptionText}
					</Paragraph>
				) : (
					<Empty description="Текст отсутствует" />
				)}
			</Modal>
		</>
	);
};
