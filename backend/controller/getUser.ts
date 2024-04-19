import { Request, Response } from "express";

const getUser = function(req: Request, res: Response) {
  const { id } = req.params;
  res.status(200).json({ message: 'Got all users'});
}

export default getUser;