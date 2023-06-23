import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

import { s3Client } from './s3Client';
import { PutObjectCommand } from '@aws-sdk/client-s3';

export const getPresignedUrl = async (fileName: string) => {
  const putCommand = new PutObjectCommand({
    Bucket: 's3isfun',
    Key: `media/${fileName}`,
  });

  return getSignedUrl(s3Client, putCommand, { expiresIn: 3600 })
};
