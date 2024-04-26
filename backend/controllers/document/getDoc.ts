import { NextFunction, Request, RequestHandler, Response } from "express";

const getDoc: RequestHandler = function(req: Request, res: Response, next: NextFunction) {
  try {
    const { user } = req.body;
    res.status(200).json({ message: 'Got all documents' });
  } catch(error) {
    next(error);
  };
};

export default getDoc;