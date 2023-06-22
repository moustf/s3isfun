import { Request, Response, NextFunction } from 'express';

export const notFound = ((_req: Request, res: Response, _next: NextFunction) => {
  return res.status(404).json({ msg: "Route can't be found!" });
});
