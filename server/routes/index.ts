import { Request, Response, NextFunction, Router } from 'express';

export const router = Router();

router.get('/upload', (req: Request, res: Response, next: NextFunction) => {
  try {
    const { fileName } = req.query;

    return res.json({ fileName });
  } catch (error) {
    return next(error);
  }
});
