import Documents from "backend/models/Documents";
import { NextFunction, Request, RequestHandler, Response } from "express";

const getDoc: RequestHandler = async function(req: Request | any, res: Response, next: NextFunction) {
  try {
    // Get all the documents that are associated with a specific user.
    const contents = await Documents.find({ user: req.user.id });
    // const { user } = req.body;
    console.log('get doc');
    res.status(200).json({ message: 'Got all documents' });
  } catch(error) {
    next(error);
  };
};

export default getDoc;