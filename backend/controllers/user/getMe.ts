import { NextFunction, Request, RequestHandler, Response } from 'express';
// import Users from '../../models/Users';

const getMe: RequestHandler = async function(req: Request | any, res: Response, next: NextFunction) {
  try {
    // const { _id, name, email }:any = await Users.findById(req.user?.id);
    const { _id, name, email }: any = req?.user;
    res.status(200).json({id: _id, name, email});
  } catch(error) {
    next(error);
  }
};

export default getMe;