import { Request, Response } from "express";

const deleteUser = async function(req: Request, res: Response) {
  const { id } = req.params;
  res.status(200).json({ message: `user with ${id}`});
}

export default deleteUser;