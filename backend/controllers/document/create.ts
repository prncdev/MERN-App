import { NextFunction, Request, RequestHandler, Response } from "express";
import Documents from "../../models/Documents";
import { isValidObjectId, Schema } from "mongoose";

interface IDoc {
  user: Schema.Types.ObjectId;
  content: string;
}

const create: RequestHandler = async function(req: Request, res: Response, next: NextFunction) {
  try {
    const { user, content } = req.body;
    
    // the condition `typeof user !== typeof Schema.Types.ObjectId` checks if the `user` field is not of type `Schema.Types.ObjectId`. However, `typeof` operator in JavaScript doesn't directly determine if a value is a Mongoose ObjectId.
    // if(!user || typeof user !== typeof Schema.Types.ObjectId || !content) {

    if(!user || !content) {
      res.status(400);
      throw new Error('Please provide the all neccessary fields');
    }

    // The `isValidObjectId` method will check whether the provided user ID is a valid mongoDB document ID. if it's not then will throw the error.
    if(!isValidObjectId(user)) {
      res.status(400);
      throw new Error('Please provide a valid user ID');
    }
    
    const document:IDoc = await Documents.create({ user, content });
    res.send(201).json(document);
  } catch(error) {
    next(error);
  }
}

export default create;