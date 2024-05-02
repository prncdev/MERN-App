import { NextFunction, Request, RequestHandler, Response } from "express";
import Documents from "../../models/Documents";

const getDoc: RequestHandler = async function(req: Request | any, res: Response, next: NextFunction) {
  try {
    // Get all the documents that are associated with a specific user.
    const contents = await Documents.find({ user: req.user.id });
    
    res.status(200).json({ contents: contents });
    
  } catch(error) {
    next(error);
  };
};

export default getDoc;