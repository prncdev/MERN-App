import { Request, Response } from "express";

const getUsers = async function(req: Request, res: Response) {
  res.status(200).json({ message: 'Got all users'});
}

export default getUsers;