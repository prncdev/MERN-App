import { Request, Response } from "express";

const getUser = async function(req: Request, res: Response) {
  const { id } = req.params;
  res.status(200).json({ message: `user with ${id}`});
}

export default getUser;