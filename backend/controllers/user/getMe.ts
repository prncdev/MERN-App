import { NextFunction, RequestHandler, Request, Response } from 'express';
import Users from '../../models/Users';

const getMe: RequestHandler = async function(req: Request | any, res: Response, next: NextFunction) {
  try {
    const user = await Users.findById(req?.user.id);
    res.status(200).json({
      id: user?.id,
      name: user?.name,
      email: user?.email
    })
  } catch(error) {
    next(error);
  }
};

export default getMe;