import { Request, Response, NextFunction } from 'express';

export const serverError = (_error: Error, _req: Request, res: Response, _next: NextFunction) => {
  return res.status(500).json({ msg: 'Server side error!' });
}
