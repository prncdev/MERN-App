import { Request, Response, NextFunction } from 'express';

interface IRegister {
  name: string;
  email: string;
  age: number;
}

const register = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const { name, email, age } = await req.body;

    if(!name || !email || !age) {
      res.status(400);
      throw new Error('Please provide the neccessary fields');
    }
    const user: IRegister = { name, email, age };
    res.status(201).json(user);
    
  } catch (error) {
    next(error); // Pass the error to the next middleware
  }
};

export default register;
