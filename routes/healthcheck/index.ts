import { Request, Response } from 'express';
import { version } from '../../package.json';

export const healthcheck = () => (req: Request, res: Response) => {
  res.json({
    version,
  });
};
