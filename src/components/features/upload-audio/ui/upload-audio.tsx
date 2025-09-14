'use client';

import { Card, Divider, Progress, Space, Typography, Upload } from 'antd';
import { CloudUploadOutlined, LoadingOutlined } from '@ant-design/icons';
import { useUploadAudio } from '../model/use-upload-audio';
import classes from './upload-audio.module.scss';

export const UploadAudio = () => {
	const { Paragraph, Text } = Typography;
	const { handleUpload, isUploading } = useUploadAudio();

	return (
		<div className={classes.sticky}>
			<Card className="card-shadow" title="Загрузка аудио">
				<Paragraph type="secondary">
					Поддерживаются любые аудио-типы (например, MP3, WAV, M4A).
				</Paragraph>
				<Upload.Dragger
					accept="audio/*"
					multiple={false}
					customRequest={handleUpload}
					showUploadList={false}
					disabled={isUploading}
					maxCount={1}
					style={{ borderRadius: 12 }}
				>
					<p className="ant-upload-drag-icon">
						<CloudUploadOutlined />
					</p>
					<p className="ant-upload-text">Перетащите файл сюда или нажмите для выбора</p>
				</Upload.Dragger>

				{isUploading && (
					<>
						<Divider />
						<Card style={{ marginTop: 16 }} size="small">
							<Space>
								<LoadingOutlined />
								<Text strong>Загрузка файла…</Text>
							</Space>
						</Card>
					</>
				)}
			</Card>
		</div>
	);
};
