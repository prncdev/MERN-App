import { Request, Response } from "express";

const getUsers = function(req: Request, res: Response) {
  res.status(200).json({ message: 'Got all users'});
}

export default getUsers;