import Colors from 'colors.ts';
import { Request, Response } from 'express';

interface IRegister {
  name: string;
  email: string;
  age: number;
}

const register = async function (req: Request, res: Response) {
  try {
    const { name, email, age } = await req.body;
    const user: IRegister = { name, email, age };
    console.log(user);
    res.status(201).json(user);
  } catch (error) {
    Colors.theme({ error: 'red' });
    process.exit(1);
  }
};

export default register;
