import { Tag } from "antd";

export type JobStatus = 'CREATED' | 'SUCCESS' | 'ERROR'

export function statusTag(status: JobStatus) {
  switch (status) {
    case 'CREATED':
      return <Tag color="processing">CREATED</Tag>;
    case 'SUCCESS':
      return <Tag color="success">SUCCESS</Tag>;
    case 'ERROR':
      return <Tag color="error">ERROR</Tag>;
  }
}