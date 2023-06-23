import { Request, Response, NextFunction } from 'express';

export const serverError = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.log(error);

  return res.status(500).json({ msg: 'Server side error!' });

}
