'use client'

import { Card, Divider, Progress, Space, Typography, Upload } from 'antd';
import {
	CloudUploadOutlined,
} from '@ant-design/icons';
import { useUploadAudio } from '../model/use-upload-audio';

export const UploadAudio = () => {

    const { Paragraph, Text } = Typography
    const { handleUpload, isUploading, uploadPct } = useUploadAudio();

	return (
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

			{isUploading && (<>
				<Divider />
				<Card style={{ marginTop: 16 }} size="small">
					<Space direction="vertical" style={{ width: '100%' }}>
						<Text strong>Загрузка файла…</Text>
						<Progress
							percent={uploadPct}
							status={uploadPct < 100 ? 'active' : 'normal'}
						/>
					</Space>
				</Card>
			</>
			)}
		</Card>
	);
};
