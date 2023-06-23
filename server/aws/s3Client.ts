import { S3Client } from '@aws-sdk/client-s3';

import { accessKeyId, secretAccessKey } from '../config/environments';

export const s3Client = new S3Client({
  endpoint: 'https://s3.eu-central-1.amazonaws.com',
  region: 'eu-central-1',
  credentials: {
    accessKeyId: accessKeyId as string,
    secretAccessKey: secretAccessKey as string,
  },
});
