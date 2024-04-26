import { NextFunction, RequestHandler, Request, Response } from 'express';

const getMe: RequestHandler = function(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(200).json({ message: 'My Profile' });
  } catch(error) {
    next(error);
  }
};

export default getMe;