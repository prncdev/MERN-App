import { NextFunction, Request, RequestHandler, Response } from 'express';
import Users from '../models/Users';
import Sessions from '../models/Sessions';

export const authorizeHandler: RequestHandler = async function (req: Request | any, res: Response, next: NextFunction) {
  let token: string | null = null;
  try {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
      const userID = await Sessions.findById(token);

      if (!userID) {
        res.status(401);
        throw new Error('unauthorized');
      }

      req.user = await Users.findById(userID?.user).select('-password');
      
      // After setting the user into the request object move the middleware/control to next functions
      next();
    } else if (!token) {
      res.status(401);
      throw new Error('unauthorized, no token');
    }
  } catch (error) {
    next(error);
  }
};
