import { NextFunction, Request, RequestHandler, Response } from "express";
import bcrypt from 'bcryptjs'
import Users from "../../models/Users";

const login: RequestHandler =  async function(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });

    // Check if email is valid and password is correct.
    if(user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        _id: user.id,
        name: user.name,
        email: user.email
      })
    } else {
      res.status(400);
      throw new Error('Invalid email or password');
    }
  } catch(error) {
    next(error);
  }
};

export default login;