import { NextFunction, Request, RequestHandler, Response } from "express";
import Users from "../../models/Users";

const getUsers: RequestHandler = async function(req: Request, res: Response, next: NextFunction) {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch(error) {
    next(error);
  }
}

export default getUsers;