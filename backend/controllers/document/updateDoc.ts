import { NextFunction, Request, RequestHandler, Response } from "express";
import Documents from "../../models/Documents";
import Users from "../../models/Users";

const updateDoc: RequestHandler = async function(req: Request | any, res: Response, next: NextFunction) {
  try {
    const content = await Documents.findById(req.params.id);
    const user = await Users.findById(req.user.id);
    
    // Check if the current loggedin user is owner/author of the doucment.
    if(!user) {
      res.status(401);
      throw new Error('unauthorized');
    }
    // Check whether the document is exists with provided Doc ID.
    if(!content) {
      res.status(404);
      throw new Error('No content found to update');
    }

    const updatedDoc = await Documents.findByIdAndUpdate(req.params.id, req.body, {new: true});

    res.status(200).json({ content: updatedDoc});
    
  } catch(error) {
    next(error);
  }
}

export default updateDoc