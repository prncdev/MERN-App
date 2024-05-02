import { NextFunction, Request, RequestHandler, Response } from 'express';
import Users from '../models/Users';

export const authorizeHandler: RequestHandler = async function (req: Request | any, res: Response, next: NextFunction) {
  let token: string | null = null;
  try {
    if (req.headers.authorization?.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
      const userSession = await Users.findOne({ session: token }).select(['-password']);

      if (!userSession) {
        res.status(401);
        throw new Error('unauthorized');
      }

      if (userSession.expiresOn && userSession.expiresOn < new Date()) {
        console.log('session has expired');
        // If we set a field as `undefined` if will automatically deletes that field from the document.
        userSession.session = undefined;
        userSession.expiresOn = undefined;
        await userSession.save();
        res.status(400);
        throw new Error('Invalid session or session has expired');
      }

      req.user = userSession;
      // After setting the user into the request object move the middleware/control to next functions
      next();
    } else if (!token) {
      res.status(401);
      throw new Error('unauthorized, no session ID');
    }
  } catch (error) {
    next(error);
  }
};
