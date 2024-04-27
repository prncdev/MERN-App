import { NextFunction, Request, RequestHandler, Response } from "express";
import Sessions from "../../models/Sessions";

const logout: RequestHandler =  async function(req: Request, res: Response, next: NextFunction) {
  let token: string | null = null;

  try {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
      const user = await Sessions.findByIdAndDelete(token);
      if(user) {
        res.status(200).json({ token: token});
      } else {
        res.status(400);
        throw new Error('Not logged in');
      }
      
    } else if (!token) {
      res.status(401);
      throw new Error('unauthorized, no token');
    }
  } catch (error) {
    next(error);
  }
};

export default logout;