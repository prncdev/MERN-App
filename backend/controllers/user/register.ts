import { Request, Response, NextFunction } from 'express';
import Users from '../../models/Users';
import bcrypt from 'bcryptjs';

interface IRegister {
  id?: any;
  name: string;
  email: string;
  password: string;
}

const register = async function (req: Request, res: Response, next: NextFunction) {
  try {
    const { name, email, password } = req.body;

    // Checking fields aren't empty.
    if(!name || !email || !password) {
      res.status(400);
      throw new Error('Please provide all the neccessary fields');
    }

    // Check whether user is already exists.
    const userExist = await Users.findOne({email});
    if(userExist) {
      res.status(400);
      throw new Error('Email already in use');
    }

    // Hash the password.
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create a user
    const user: IRegister = await Users.create({ name, email, password: hashedPassword});

    // Check if user created successfully.
    if(user) {
      // res.status(201).json({
      //   _id: user?.id,
      //   name: user.name,
      //   email: user.email,
      // });
      res.status(201).json(user);
    } else {
      res.status(500).json({ message: 'Something went wrong.' });
    }
  } catch (error) {
    next(error); // Pass the error to the next middleware
  }
};

export default register;
