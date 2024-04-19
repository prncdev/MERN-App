import { Request, Response } from 'express';

interface IRegister {
  name: string;
  email: string;
  age: number;
}

const register = function (req: Request, res: Response) {
  try {
    const name: string = req.body;
    const email: string = req.body;
    const age: number = req.body;

    const user: IRegister = { name, email, age };

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default register;
