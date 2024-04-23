import { Request, Response, NextFunction, RequestHandler } from 'express';
import Users from '../../models/Users';

interface IRegister {
  name: string;
  email: string;
  age: number;
}

const register: RequestHandler = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const { name, email, age } = req.body;

    if(!name || !email || !age) {
      res.status(400);
      throw new Error('Please provide all the neccessary fields');
    }

    const user: IRegister = await Users.create({ name, email, age });
    res.status(201).json(user);
  } catch (error) {
    next(error); // Pass the error to the next middleware
  }
};

export default register;
