import { NextFunction, Request, RequestHandler, Response } from 'express';
import Documents from '../../models/Documents';
const setDoc: RequestHandler = async function(req: Request | any, res: Response, next: NextFunction) {
  try {
    const user = req.user.id;
    const { content } = req.body;
    const contentCreated = await Documents.create({ user, content});
    
    res.status(201).json(contentCreated);
  } catch(error) {
    next(error);
  }
}

export default setDoc;
// $2a$10$oCnGDNVYJYXQBxku3gxuOO--e8dc8076-b9ad-40fa-aa07-87d8c5c0eb5c