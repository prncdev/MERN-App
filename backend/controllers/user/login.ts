import { NextFunction, Request, RequestHandler, Response } from "express";

const login: RequestHandler = async function(req: Request, res: Response, next: NextFunction) {
  res.status(200).json({ message: 'User login' });
}

export default login;