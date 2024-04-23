import { NextFunction, Request, Response } from 'express';

const updateUser = async function ( req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.params.id) {
      res.status(404);
      throw new Error('Invalid user ID');
    }
    
    res.status(200).json({ message: `user with ${req.params.id}` });
  } catch (error) {
    next(error);
  }
};

export default updateUser;
