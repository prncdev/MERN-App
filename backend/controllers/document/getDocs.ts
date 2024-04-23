import { NextFunction, Request, RequestHandler, Response } from 'express';
import Documents from '../../models/Documents';

const getDocs: RequestHandler = async function(req: Request, res: Response, next: NextFunction) {
  try {
    const docs = await Documents.find();
    res.status(200).json(docs);
  } catch(error) {
    next(error);
  }
}

export default getDocs;