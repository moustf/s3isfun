import { Request, Response, NextFunction } from 'express';

import { getPresignedUrl as getPresignedUrlService } from '../../aws';

export const getPresignedUrl = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { fileName } = req.query;

    const presignedUrl = await getPresignedUrlService(fileName as string)

    return res.json({ presignedUrl });
  } catch (error) {
    return next(error);
  }
};
