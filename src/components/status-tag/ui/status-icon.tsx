import { JobStatus } from "./status-tag";
import {
	CheckCircleTwoTone,
	ClockCircleTwoTone,
	CloseCircleTwoTone,
} from '@ant-design/icons';

export function statusIcon(status: JobStatus) {
  switch (status) {
    case 'CREATED':
      return <ClockCircleTwoTone twoToneColor="#2f54eb" />;
    case 'SUCCESS':
      return <CheckCircleTwoTone twoToneColor="#52c41a" />;
    case 'ERROR':
      return <CloseCircleTwoTone twoToneColor="#ff4d4f" />;
  }
}