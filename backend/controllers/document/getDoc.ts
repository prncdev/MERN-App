import { NextFunction, Request, RequestHandler, Response } from 'express';
import Documents from '../../models/Documents';

const getDoc: RequestHandler = async function(req: Request, res: Response, next: NextFunction) {
  try {
    const doc = await Documents.findById(req.params.id);

    if(!doc) {
      res.status(404);
      throw new Error('Document not found');
    }
    res.status(200).json(doc);
  } catch(error) {
    next(error);
  }
}

export default getDoc;